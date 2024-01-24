const year = document.getElementById('year') as HTMLElement
const thisYear = new Date().getFullYear() 
year.setAttribute('datetime', (thisYear as unknown) as string) 
year.textContent = (thisYear as unknown) as string