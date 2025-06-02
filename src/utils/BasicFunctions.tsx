import { useEffect } from "react";

export function search(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const q = formData.get('q') as string;

  if (q) {
    ChangePage(`/search?q=${encodeURIComponent(q)}`);
  }
}

export function ChangePage(url: string) {
  window.location.href = url;
}

export function ChangeTitle(title: string) {
  useEffect(() => {
          document.title = title;
  }, []);
}

export function submitContacts(name: string, email: string, message: string): void {}

export function submitRegistration(event: React.FormEvent<HTMLFormElement>) {event.preventDefault();}