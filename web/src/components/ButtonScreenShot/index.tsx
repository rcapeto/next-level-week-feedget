import { FunctionComponent, useState } from 'react';
import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { Loading } from '../Loading';

interface ButtonScreenShotProps {
   onScreenshotTook?: (image: string | null) => void;
   screenshot: string | null;
};

export const ButtonScreenShot: FunctionComponent<ButtonScreenShotProps> = ({ onScreenshotTook, screenshot }) => {
   const [isTakingScreenshot, setIsTakingscreenShot] = useState(false);

   const handleTakeScreenShot = async () => {
      try {
         setIsTakingscreenShot(true);

         const canvas = await html2canvas(document.querySelector('html')!);
         const base64Image = canvas.toDataURL('image/png');
   
         onScreenshotTook && onScreenshotTook(base64Image);
      } catch(err) {
         console.error('Error to screenshot');
      } finally {
         setIsTakingscreenShot(false);
      }
   };

   const handleResetScreenshot = () => {
      onScreenshotTook && onScreenshotTook(null);
   };
   
   if(screenshot) {
      return(
         <button 
            onClick={handleResetScreenshot}
            style={{ backgroundImage: `url(${screenshot})`}}
            type="button"
            className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
         >
            <Trash weight="fill"/>
         </button>
      );
   }

   return(
      <button
         onClick={handleTakeScreenShot}
         type="button"
         className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      >
         {
            isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 text-zinc-100"/>
         }
      </button>
   );
};