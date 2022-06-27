import React, { useEffect } from 'react'

import Status from '../components/home/Status'
import Posts from '../components/home/Posts'
import RightSideBar from '../components/home/RightSideBar'

import { useSelector } from 'react-redux'
import LoadIcon from '../images/loading.gif'


let scroll = 0;

const Home = () => {
    const { homePosts } = useSelector(state => state)

    window.addEventListener('scroll', () => {
        if(window.location.pathname === '/'){
            scroll = window.pageYOffset
            return scroll;
        }
    })

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({top: scroll, behavior: 'smooth'})
        }, 100)
    },[])

    return (
        <div className="home row mx-0" style={{padding: '0 125px'}}>
            <div className="col-md-8">
                <Status />

                {
                    homePosts.loading 
                    ? <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
                    : (homePosts.result === 0 && homePosts.posts.length === 0)
                        ? <h3 className="text-center">𝐋𝐞𝐭'𝐬 𝐬𝐭𝐚𝐫𝐭 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐟𝐢𝐫𝐬𝐭 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞𝐬</h3>
                        : <Posts />
                }
                
            </div>
            
            <div className="col-md-4">
                <RightSideBar />
            </div>
        </div>
    )
}

export default Home
