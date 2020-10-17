import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing : border-box;
    padding-bottom : 3rem;
    width : 768px;
    margin : 0 auto;
    margin-top : 2rem;
    @media screen and (max-width : 768px){
        width : 100%:
        padding-left : 1rem;
        padding-right : 1rem;
    }
`;


const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null);
    const[loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchDdata = async() => {
            setLoading(true);
            try{
                const query = category === 'all' ? '' : `&category=${category}`;//https://newsapi.org/s/south-korea-sports-news-api https://newsapi.org/s/south-korea-news-api
                const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=5938d498d6b34d4b80bd210a77148080`);
                setArticles(response.data.articles);
                //http://newsapi.org/v2/top-headlines?country=kr&apiKey=5938d498d6b34d4b80bd210a77148080
                //http://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=5938d498d6b34d4b80bd210a77148080
            }catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchDdata();
    }, [category]);

    // 대기중
    if(loading){
        return<NewsListBlock>대기중...</NewsListBlock>
    }
    /// articles 갑이 유효할 때
    if(!articles){
        return null
    }
    return(
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key = {article.url} article = {article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;