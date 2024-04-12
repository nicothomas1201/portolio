import type { APIContext } from 'astro'

export async function GET({ params, request }: APIContext) {
  const response = await fetch(
    'https://api.github.com/users/nicothomas1201/repos',
  )

  const data = await response.json()
  const parsedData = data.map((repo: any) => {
    return {
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      language: repo.language,
      stars: repo.stargazers_count,
    }
  })
  return new Response(JSON.stringify(parsedData), {
    headers: { 'content-type': 'application/json' },
  })
}
