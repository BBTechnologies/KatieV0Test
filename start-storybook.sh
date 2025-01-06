#!/bin/bash
eval $(grep '^SB_OPEN' .env)

# Allow optional override of opening a browser window for storybook
storybook dev -p 9006 -c config/storybook/web -p 9006 -c config/storybook/web $( [ "$SB_OPEN" = "false" ] && echo "--no-open" )
