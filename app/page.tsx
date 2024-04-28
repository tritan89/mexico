

import HeroImage from './components/heroImage';
import ImageTextComponent from './components/hook';
import Link from 'next/link';
import {ShowUsers, CheckFreeDate} from '@/pages/api/users';


export default function Page() {
 
  // console.log(data);
  return (
    <main className="flex min-h-screen flex-col ">
      <HeroImage
        imageUrl="/images/cr-huatulco-fachada.jpg"
        altText="heroImage"
        caption="Bienveindos a Hualtuco!"
      />
      <div className="p-5"></div>
      <ImageTextComponent
        title="Welcome to Suite 1107"
        text=" experience wonderful views"
        imagePath="/images/Camino-Real-Dev-12.jpg"
      />
      <div className="p-5"></div>
      
      <div className='p-20 text-5xl text-center'>
        <Link href="/calendar">Book Your stay Now!</Link>
      </div>
      {/* <ShowUsers params={{ user: "tristan" }} /> */}
      <CheckFreeDate params={{ date: new Date("2022-01-02") }} />
    </main>
  );
}
