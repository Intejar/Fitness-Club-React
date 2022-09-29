import React from 'react';
import './Ques.css'

const Ques = () => {
    return (
        <div className='blog'>
            <p>How Does React wors?</p>
            <p>Ans: ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.

                It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.

                This article will explore React’s features, explain how it works, and go over its benefits for front-end developers. We’ll also cover the differences between ReactJS and React Native regarding their roles in the web and mobile app development industry.</p>
            <p>Difference between Props and State?</p>
            <p>Ans: 1. In props data is passed from one component to another.In state it pass within the coponents only.
                2. Props is immutable and state is mutable.
                3.props can be used with state and fuctional componenst where as state  can be used with state components.    
            </p>
            <p>
                Advantage of useEffect?
            </p>
            <p>Using useEffect is probably the best part of React Hooks. It helps reduce the clutter of the component lifecycle methods and, most importantly, it helps separate different logic that can appear in the lifecycle methods</p>

        </div>
    
    );
};

export default Ques;