export const manipulateRequestBody = (bodyValue: Record<string, string>, ...fieldsToPass: string[]) => {
   const state: { 
      hasEmptyField: boolean;
      emptyFields: { key: string }[]
   } = {
      hasEmptyField: false,
      emptyFields: [],
   };

   for(const key in bodyValue) {
      const value = bodyValue[key];

      if(fieldsToPass.includes(key)) continue;

      if(!value) {
         state.hasEmptyField = true;
         state.emptyFields.push({ key })
      }
   }

   return state;
};