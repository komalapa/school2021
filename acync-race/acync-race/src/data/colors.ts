function getRandomColor(): string {
  return `00000${Math.floor(Math.random() * 16777215).toString(16)}`.slice(-6);
}

export default getRandomColor;