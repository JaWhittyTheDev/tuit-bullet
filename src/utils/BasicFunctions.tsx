export function search(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const q = formData.get('q') as string;

  if (q) {
    window.location.href = `https://tuit.com/search?q=${encodeURIComponent(q)}`;
  }
}