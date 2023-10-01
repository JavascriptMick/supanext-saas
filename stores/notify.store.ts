export interface Notification {
  id: number;
  message: string;
  type: NotificationType;
  notifyTime: number;
}

export enum NotificationType {
  Info,
  Success,
  Warning,
  Error,
}

export interface NotifyStoreState {
  notifications: Notification[];
  notificationsArchive: Notification[];
  nextId: number;
  notify: (messageOrError: unknown, type: NotificationType) => void;
  removeNotification: (notification: Notification) => void;
}

import { create } from "zustand";

export const useNotifyStore = create<NotifyStoreState>((set, get) => ({
  notifications: [],
  notificationsArchive: [],
  nextId: 1,
  notify: (messageOrError: unknown, type: NotificationType) => {
    let message: string = "";
    if (messageOrError instanceof Error) message = messageOrError.message;
    if (typeof messageOrError === "string") message = messageOrError;
    const notification: Notification = {
      id: get().nextId,
      message,
      type,
      notifyTime: Date.now(),
    };
    set((state) => ({
      notifications: [...state.notifications, notification],
      nextId: state.nextId + 1,
    }));
    setTimeout(get().removeNotification.bind(this), 5000, notification);
  },
  removeNotification(notification: Notification) {
    set((state) => ({
      notifications: state.notifications.filter(
        (n) => n.notifyTime != notification.notifyTime
      ),
    }));
  },
}));
