export async function getWeather(){const res=await fetch('/weather');return(res.json() as Promise<{description:string}>)}
