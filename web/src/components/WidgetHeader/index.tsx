import { ArrowLeft } from "phosphor-react";
import { FunctionComponent, ReactNode } from "react";

import { CloseButton } from '../CloseButton';

interface WidgetHeaderProps {
   children?: ReactNode;
   backButton?: boolean;
   onClickBackButton?: () => void;
};

export const WidgetHeader: FunctionComponent<WidgetHeaderProps> = ({ children, backButton, onClickBackButton }) => {
   return(
      <header>
         {
            backButton && (
               <button
                  type="button"
                  className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                  onClick={onClickBackButton}
               >
                  <ArrowLeft weight="bold" className="w-4 h-4"/>
               </button>
            )
         }

         { children }
         
         <CloseButton />
      </header>
   );
};