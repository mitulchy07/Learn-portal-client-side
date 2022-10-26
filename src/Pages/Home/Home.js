import React from 'react';
import ExpertTrainer from '../ExpertTrainer/ExpertTrainer';
import Intro from '../Intro/Intro';
import PageViews from '../PageViews/PageViews';
import Faq from '../Shared/FAQ/Faq';
import TopCourse from '../TopCourse/TopCourse';

const Home = () => {
  return (
    <div>
      <Intro></Intro>
      <TopCourse></TopCourse>
      <ExpertTrainer></ExpertTrainer>
      <PageViews></PageViews>
      <Faq></Faq>
    </div>
  );
};

export default Home;
