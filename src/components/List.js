import { Config } from '../config';
import styled from 'styled-components';
import { StyleGuide } from './StyleGuide';
import { Tweet } from './Tweet';
import { useSpring, animated, useTransition } from 'react-spring';
import { LoadingScreen } from './LoadingScreen';
import { getExampleData } from '../services/ExampleResponse';
import { useEffect, useState } from 'react';

const Container = styled(animated.div)`
display: flex;
flex: 1;
margin: 0 20%;
min-height: 100%;
padding: 10px;
flex-direction: column;
justify-content: flex-start;
align-items: stretch;
border-radius: ${StyleGuide.borders.container};
background-color: ${StyleGuide.colors.background.primary};
@media (max-width: 1080px) {
   margin: 0 10%;
  }
@media (max-width: 414px) {
   margin: 0 0;
  }
`;

const ItemContainer = styled.div`
display: grid;   
  gap: 1em;   
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));   
  grid-template-rows: masonry;
position:relative;
margin: 10px 15px;
padding: 10px;
min-height: 100px;
min-width: 200px;
`;

const AnimationWrapper = styled(animated.div)`
display: flex;
`;

const Title = styled.h2`
    font-size: 2em;
    color: ${StyleGuide.colors.font.primary};
`;

export const TweetContainer = ({ ...props }) => {
    //  State Variables 
    const [tweets, setTweets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //  Fetch Data when Component mounts
    useEffect(() => {
        setIsLoading(true);
        getExampleData().then(items => {
            setTweets(items);
            setIsLoading(false);
        }
        ).catch(err => {
            console.log("Error fetching Tweets", err);
            setIsLoading(false);
        });
    }, []);

    //  Animation for whole Container
    const containerAnimation = useSpring({
        from: { filter: 'blur(50px)', opacity: 0 },
        to: { filter: 'blur(0px)', opacity: 1 }
    });

    //  Animation for each Tweet
    const transitions = useTransition(tweets, (item, index) => item.id || index, {
        from: { transform: 'translateX(150px)', opacity: 0, filter: 'blur(50px)' },
        enter: { transform: 'translateX(0px)', opacity: 1, filter: 'blur(0px)' },
        trail: 100
    });

    return (
        <Container style={containerAnimation}>
            <Title>Tweets</Title>
            {isLoading &&
                <LoadingScreen />
            }
            <ItemContainer>
                {
                    transitions?.length > 0 && transitions.map(({ item, props, key }) => <AnimationWrapper key={key} style={props}><Tweet {...item} /></AnimationWrapper>)
                }
            </ItemContainer>
        </Container>
    );
} 