export async function GetArticle(searchQuery: string = '') {
  let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=POTbRqpXMSaMjVdTaOHVkmN6twEMoxiu'

  if (searchQuery) {
    url += `&q=${searchQuery}`
  }

  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      return data.response.docs
    } else {
      throw new Error('Failed to get data')
    }
  } catch (error) {
    throw new Error('Failed to get data')
  }
}