import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import SectionEducation from './components/SectionEducation';
import SectionExperience from './components/SectionExperience';
import SectionBio from './components/SectionBio';


function App() {
  return (
    <div>
      <Header/>
      <Section/>
      <SectionEducation/>
      <SectionExperience/>
      <SectionBio/>
    </div>
  );
}

export default App;