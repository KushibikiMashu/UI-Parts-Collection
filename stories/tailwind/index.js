import React from "react";
import { storiesOf } from "@storybook/react";
import '../index.tailwind.css'

import Alert from './alert'

storiesOf('Tailwind CSS', module).add('Alert', () => <Alert/>);
