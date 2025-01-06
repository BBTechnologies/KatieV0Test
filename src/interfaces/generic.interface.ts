/* eslint-disable @typescript-eslint/no-explicit-any */

export interface GenericFunction<R = void> {
    (...args: any[]): R;
}

export type JSONValue = string | number | boolean | null | undefined | JSONObject | JSONArray;

export type JSONArray = JSONValue[];

export interface JSONObject {
    [key: string]: JSONValue;
}
