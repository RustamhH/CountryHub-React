import { fetchActions } from './fetches';
import { AppDispatch } from './store';
import axios from 'axios'



export const getAllCountries = () => async (dispatch: AppDispatch) => {
  try{ 
    dispatch(fetchActions.Request());
    const response = await axios.get(`https://restcountries.com/v3.1/all`);
    console.log(response.data)
    dispatch(fetchActions.Success(response.data))
  } catch (e: any) {
    dispatch(fetchActions.Error(e.messsage))
  }
}