import * as React from "react";
import { createContext } from "react";

const MessageContext = createContext({messages: []})

export { MessageContext }