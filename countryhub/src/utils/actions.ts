import { fetchActions } from './fetches';
import { AppDispatch } from './store';
import axios from 'axios'



export const getAllCountries = () => async (dispatch: AppDispatch) => {
  try{ 
    dispatch(fetchActions.Request());
    const response = await axios.get(`https://restcountries.com/v3.1/all`);
    dispatch(fetchActions.Success(response.data))
  } catch (e: any) {
    dispatch(fetchActions.Error(e.messsage))
  }
}


export const getSearchedCountries = (name:string,category:string) => async (dispatch: AppDispatch) => {
  try{
    dispatch(fetchActions.Request());
    const response = await axios.get(`https://restcountries.com/v3.1/${category}/${name}`);
    dispatch(fetchActions.Success(response.data))
  } catch (e: any) {
    dispatch(fetchActions.Error(e.messsage))
    
  }
}

export const getCountriesByRegion = (options:string[]) => async (dispatch:AppDispatch) => {
  try{
    
    dispatch(fetchActions.Request());
    let result:object[]=[]
    for (let index = 0; index < options.length; index++) {
      const element = options[index];
      const response=await axios.get(`https://restcountries.com/v3.1/region/${element}`)
      const responseData=response.data
      result.push(...responseData)
    }
    
    dispatch(fetchActions.Success(result))

  } catch (e: any) {
    dispatch(fetchActions.Error(e.messsage))
    
  }
}


export const getCountriesByIndependency = (status:string) => async (dispatch: AppDispatch) => {
  try{ 
    dispatch(fetchActions.Request());
    if(status=='Yes') status='true'
    else if(status=='No') status='false'
    const response = await axios.get(`https://restcountries.com/v3.1/independent?status=${status}`);
    dispatch(fetchActions.Success(response.data))
  } catch (e: any) {
    dispatch(fetchActions.Error(e.messsage))
  }
}
