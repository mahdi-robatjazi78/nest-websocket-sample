
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
## Websocket Gateway And Client Sample Application.

#### Packages For Installation

```bash
$ pnpm install socket.io
$ pnpm install socket.io-client
$ pnpm install @nestjs/websockets
$ pnpm install @nestjs/platform-socket.io
```

#### You can Running the react app for websocket client with this code

```bash
# first install vitejs react app and install socket.io-client package 

$ pnpm create vite@latest react-websocket-app 
$ pnpm install socket.io-client

```
#### Initial a context for track socket


```bash
# websocket-context.tsx

import { createContext } from "react";
import {io , Socket} from 'socket.io-client'


export const socket = io("http://localhost:9001")
export const WebSocketContext = createContext<Socket>(socket)
export const WebSocketContextProvider = WebSocketContext.Provider

```


#### Then we need a component 

```bash


import { useEffect, useContext } from "react";
import { WebSocketContext } from "./context/websocket-context";

function App() {
  const socket = useContext(WebSocketContext);

  useEffect(() => {
    socket.on("connect", () => console.log("connected"));

    socket.on("onMessage", (data) => {
      console.log("A Message Received ");
      console.log(data);
    });

    return () => {
      console.log("Unregistering Events...");
      socket.off("connect");
      socket.off("onMessage");
    };
  }, []);

  return (
    <div>
      <h1 className="text-3xl">websocket client</h1>
    </div>
  );
}

export default App;


```
