import { FunctionComponent } from 'react';
import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';

/**
 * Acessibilidade = 
 * - aria-expanded => quando abrir e fechar (se está aberto ou fechado) => true or false
 * - aria-controls => qual o elemento que está em tela (#idDoElemento)
 * 
 */

export const Widget: FunctionComponent = () => {
   return(
      <Popover className="absolute bottom-4 right-4">
         <Popover.Panel>Hello World</Popover.Panel>
         <Popover.Button 
            className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
         >
            <ChatTeardropDots className="w-6 h-6"/>
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
               <span className="pl-2">
                  Feedback
               </span>
            </span>
         </Popover.Button>
      </Popover>
   );
};