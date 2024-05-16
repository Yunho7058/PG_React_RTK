import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

const dispatch = useDispatch();

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
const useTypeDispatch = () => useDispatch<AppDispatch>();

const logger = useTypedSelector((state) => state.logger);
