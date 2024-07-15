import FirstComponent from './FirstComponent';
import { FifthComponent } from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import ExploringJavaScriptFurther from './ExploringJavaScriptFurther';

export default function StarterComponent() {
    return (
      <div className="App">
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
        <FifthComponent />
        <ExploringJavaScriptFurther />
      </div>
    );
  }