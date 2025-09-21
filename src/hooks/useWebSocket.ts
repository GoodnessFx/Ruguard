import { useState, useEffect, useRef } from 'react';
import io, { Socket } from 'socket.io-client';
import { WebSocketMessage, RealTimeUpdate } from '../types';

export function useWebSocket(url: string) {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<WebSocketMessage[]>([]);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io(url);

    socketRef.current.on('connect', () => {
      setIsConnected(true);
    });

    socketRef.current.on('disconnect', () => {
      setIsConnected(false);
    });

    socketRef.current.on('message', (message: WebSocketMessage) => {
      setMessages(prev => [...prev, message]);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [url]);

  const sendMessage = (message: any) => {
    if (socketRef.current && isConnected) {
      socketRef.current.emit('message', message);
    }
  };

  const subscribeToToken = (tokenAddress: string) => {
    if (socketRef.current && isConnected) {
      socketRef.current.emit('subscribe', { token: tokenAddress });
    }
  };

  const unsubscribeFromToken = (tokenAddress: string) => {
    if (socketRef.current && isConnected) {
      socketRef.current.emit('unsubscribe', { token: tokenAddress });
    }
  };

  return {
    isConnected,
    messages,
    sendMessage,
    subscribeToToken,
    unsubscribeFromToken,
  };
}