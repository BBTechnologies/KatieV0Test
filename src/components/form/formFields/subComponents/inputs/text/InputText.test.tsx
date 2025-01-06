/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormField } from '../../../formFieldWrapper/FormField';
import { FormFieldProps } from '../../../formFieldWrapper/formFieldProps';

describe('InputText', () => {
  afterEach(() => {
    // restore replaced property
    jest.restoreAllMocks();
  });

  let registerSpy: jest.SpyInstance;

  const mockSubmit = jest.fn();
  const mockChangeHandler = jest.fn();

  const testProps: FormFieldProps = {
    field: {
      type: 'text',
      id: 'TestField',
      name: 'TestName'
    },
    label: {
      text: 'Test label'
    },
    validation: { required: 'Test message' }
  };

  const CreateTestField = (customTestProps = testProps) => {
    const TestField: React.FC<FormFieldProps> = (props) => {
      const hookFormMethods = useForm({
        mode: 'onBlur'
      });

      registerSpy = jest.spyOn(hookFormMethods, 'register');

      return (
        <FormProvider { ...hookFormMethods }>
          <form onSubmit={ hookFormMethods.handleSubmit(mockSubmit) }>
            <FormField { ...props } />
            <button type="submit">SUBMIT</button>
          </form>
        </FormProvider>
      );
    };

    const { container } = render(
      <TestField { ...customTestProps } />
    );

    return {
      container,
      wrapper: container.querySelectorAll('.formField')[0],
      label: container.querySelectorAll('label')[0],
      field: container.querySelectorAll('input')[0]
    };
  };

  it('should register the input into the react-hook-form provider context', () => {
    CreateTestField();
    expect(registerSpy).toHaveBeenCalled();
  });

  it('should render an input field', () => {
    const { container } = CreateTestField();
    expect(container.querySelectorAll('label')).toHaveLength(1);
    expect(container.querySelectorAll('input')).toHaveLength(1);
  });

  describe('InputText properties', () => {
    it('Creates a field with a name and id property', () => {
      const { field } = CreateTestField();
      expect(field.name).toEqual(testProps.field.name);
      expect(field.id).toEqual(testProps.field.id);
    });

    it('Supports different name and id properties', () => {
      const { field } = CreateTestField({
        ...testProps,
        field: {
          ...testProps.field,
          name: 'CustomName',
          id: 'CustomId'
        }
      });
      expect(field.name).toEqual('CustomName');
      expect(field.id).toEqual('CustomId');
    });

    it('Supports a custom css class on the wrapper', () => {
      const { wrapper } = CreateTestField({
        ...testProps,
        customCssClasses: {
          wrapper: 'ContainerCustomCssClass'
        }
      });
      expect(wrapper.getAttribute('class')?.indexOf('ContainerCustomCssClass')).toBeGreaterThan(0);
    });

    it('Can have a custom change handler', async () => {
      const { field } = CreateTestField({
        ...testProps,
        field: {
          ...testProps.field,
          onChange: mockChangeHandler
        }
      });

      await act(async () => {
        fireEvent.change(field, { target: { value: 'new value' } });
      });

      expect(mockChangeHandler).toHaveBeenCalled();
    });

    describe('InputText label', () => {
      it('Always renders a label with a for attribute', () => {
        const { label } = CreateTestField({
          ...testProps,
          field: {
            ...testProps.field,
            name: 'TestingNameAttr',
            id: 'TestingIdAttr'
          }
        });
        expect(label.getAttribute('for')).toEqual('TestingIdAttr');
      });

      it('The for will match the id attribute', () => {
        const { label } = CreateTestField({
          ...testProps,
          field: {
            ...testProps.field,
            name: 'TestingNameAttr',
            id: 'TestingIdAttr'
          }
        });
        expect(label.getAttribute('for')).toEqual('TestingIdAttr');
      });

      it('Normally does not have a css class', () => {
        const { label } = CreateTestField({
          ...testProps
        });
        expect(label.getAttribute('class')?.trim()).toEqual('');
      });

      it('Can have a custom css class via the labelCustomCssClass property', () => {
        const { label } = CreateTestField({
          ...testProps,
          customCssClasses: {
            label: 'TestCustomLabelCssClass'
          }
        });
        expect(label.getAttribute('class')?.trim()).toEqual('TestCustomLabelCssClass');
      });

      it('Gains the withSpinner class if the showSpinner property is set', () => {
        const { label } = CreateTestField({
          ...testProps,
          showSpinner: true
        });
        expect(label.getAttribute('class')?.trim()).toEqual('withSpinner');
      });

      it('Can have both labelCustomCssClass and showSpinner property', () => {
        const { label } = CreateTestField({
          ...testProps,
          customCssClasses: {
            label: 'TestCustomLabelCssClass'
          },
          showSpinner: true
        });
        expect(label.getAttribute('class')?.trim()).toEqual('TestCustomLabelCssClass withSpinner');
      });

      describe('Label dom structure', () => {
        it('The label tag wraps the input creating an implicit relationship for accessibility', () => {
          const { label } = CreateTestField();
          expect(label.querySelectorAll('input')).toHaveLength(1);
        });

        it('Renders the label text in a span.labelText (inline block element)', () => {
          const { label } = CreateTestField();
          expect(label.querySelectorAll('span.labelText')).toHaveLength(1);
        });

        it('The span.labelText is the first child of the label by default', () => {
          const { label } = CreateTestField({
            ...testProps,
            validation: undefined
          });
          expect(label.firstElementChild?.getAttribute('class')?.trim()).toEqual('labelText');
        });

        it('The span.labelText occurs after the input if the labelIsInset property is set to true', () => {
          const { field } = CreateTestField({
            ...testProps,
            validation: undefined,
            label: {
              ...testProps.label,
              position: 'inset'
            }
          });

          expect(field.tagName).toEqual('INPUT');
          expect(field.nextElementSibling?.getAttribute('class')?.trim()).toEqual('labelText');
        });
      });

      describe('Label inner structure', () => {
        it('Defaults to the labelText css class', () => {
          const { label } = CreateTestField({
            ...testProps,
            validation: undefined
          });
          expect(label.firstElementChild?.getAttribute('class')?.trim()).toEqual('labelText');
        });

        it('Has the "mandatory" css class added if it includes "required" validation', () => {
          const { label } = CreateTestField({
            ...testProps,
            validation: { required: true }
          });
          expect(label.firstElementChild?.getAttribute('class')?.trim()).toEqual('labelText mandatory');
        });

        it('Defaults to the "sr-only" class for screen reader accessibility if the label is hidden', () => {
          const { label } = CreateTestField({
            ...testProps,
            label: {
              ...testProps.label,
              hide: true
            },
            validation: undefined
          });
          expect(label.firstElementChild?.getAttribute('class')?.trim()).toEqual('sr-only');
        });

        it('The label content can be text', () => {
          const { label } = CreateTestField({
            ...testProps,
            label: {
              ...testProps.label,
              text: 'Test label'
            }
          });
          expect(label.firstElementChild?.innerHTML).toEqual('Test label');
        });

        it('The label content can be dom elements', () => {
          const { label } = CreateTestField({
            ...testProps,
            label: {
              ...testProps.label,
              text: <strong>A bold label</strong>
            }
          });
          expect(label.firstElementChild?.innerHTML).toEqual('<strong>A bold label</strong>');
        });

        it('The label content will not execute scripts', () => {
          const consoleSpy = jest.spyOn(console, 'log');
          const { label } = CreateTestField({
            ...testProps,
            label: {
              ...testProps.label,
              // eslint-disable-next-line react/no-unescaped-entities
              text: <script>console.log('fred was here')</script>
            }
          });
          expect(label.firstElementChild?.innerHTML).toEqual('<script>console.log(\'fred was here\')</script>');
          expect(consoleSpy).not.toHaveBeenCalled();
        });
      });
    });
  });

  describe('InputText validation', () => {
    describe('Required validation', () => {
      it('Is valid if it is not required and does not have a value', async () => {
        const { container, field } = CreateTestField({
          ...testProps,
          field: {
            ...testProps.field
          },
          validation: undefined
        });
        const form: HTMLFormElement = container.querySelector('form') as HTMLFormElement;
        const submitButton: HTMLButtonElement = container.querySelector('button') as HTMLButtonElement;

        await act(async () => {
          fireEvent.blur(field);
          fireEvent.click(submitButton);
        });

        expect(mockSubmit).toHaveBeenCalled();
        expect(form.checkValidity()).toBeTruthy();
      });

      it('Is invalid if it is required and does not have a value', async () => {
        const { container, field } = CreateTestField({ ...testProps });
        const submitButton: HTMLButtonElement = container.querySelector('button') as HTMLButtonElement;

        await act(async () => {
          fireEvent.blur(field);
          fireEvent.click(submitButton);
        });

        expect(mockSubmit).not.toHaveBeenCalled();
        expect(container.querySelectorAll('.validation')).toHaveLength(1);
      });

      it('Is valid if it is required and does have a value', async () => {
        const { container, field } = CreateTestField({
          ...testProps,
          field: {
            ...testProps.field,
            defaultValue: 'testValue'
          },
          validation: { required: 'This is required' }
        });
        const form: HTMLFormElement = container.querySelector('form') as HTMLFormElement;
        const submitButton: HTMLButtonElement = container.querySelector('button[type="submit"]') as HTMLButtonElement;

        await act(async () => {
          fireEvent.blur(field);
          fireEvent.click(submitButton);
        });

        expect(form.checkValidity()).toBeTruthy();
        expect(mockSubmit).toHaveBeenCalled();
      });
    });
  });
});
