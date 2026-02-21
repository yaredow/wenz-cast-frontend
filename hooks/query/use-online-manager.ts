import { onlineManager } from "@tanstack/react-query";
import * as Network from "expo-network";
import { useEffect } from "react";

export function useOnlineManager() {
  useEffect(() => {
    onlineManager.setEventListener((setOnline) => {
      const sub = Network.addNetworkStateListener((state) => {
        setOnline(!!state.isConnected);
      });

      return sub.remove;
    });
  });
}
