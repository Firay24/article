"use client"
import React, { useEffect, useState } from 'react'
import Container from '../Shared/Container'
import Card from './Card'
import { GetArticle } from '@/utils'
import Loading from '../Loading'

interface ArticleProps {
  searchTerm: string;
}

const Article: React.FC<ArticleProps> = ({ searchTerm }) => {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        if (searchTerm === '') {
          const data = await GetArticle(searchTerm)
          setArticles(data)
        } else {
          const data = await GetArticle()
          setArticles(data)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [searchTerm])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const data = await GetArticle()
        setArticles(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false);
      }
    }
    fetchData()
  }, [])

  return (
    <section className='my-10'>
      <Container >
        {
          isLoading ? <Loading /> : (
            <div className='flex gap-3 flex-wrap justify-center'>
              {
                articles && articles.map((article, index) => (
                  <Card key={index} article={article && article} index={index} />
                ))
              }
            </div>
          )
        }
      </Container>
    </section>
  )
}

export default Article