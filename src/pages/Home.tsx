import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import React, {useEffect, useState} from 'react';

const Home: React.FC = () => {

  const [data, setData] = useState<any>(null);

  /* 
  
  Here's the Sheets API Endpoint


  https://sheets.googleapis.com/v4/spreadsheets/1KCM33GCY8BwQSOQL4YNu3TSDMh7e4NDuggZUCoP9_MY/values/Sheet1!A2:D10?key=API_KEY_HERE
  */

  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1KCM33GCY8BwQSOQL4YNu3TSDMh7e4NDuggZUCoP9_MY/values/Sheet1!A1:E10?key=API_KEY_HERE");
        if( !response.ok) {
          throw new Error ("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData( jsonData.values );
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };
    fetchData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        {data && (
          <ul>
            {data.map((row: any, rowIndex: number) => (
              <li key={rowIndex}>
                <ul>
                  {row.map((cell: any, cellIndex: number) => (
                    <li key={cellIndex}>{cell}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
