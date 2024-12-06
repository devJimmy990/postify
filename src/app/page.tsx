'use client';
import { FC, memo,  } from "react";
import store from "@/redux/store";
import { Provider,  } from "react-redux";
import HomePage from "@components/pages/HomePage";

const Home: FC = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default memo(Home)
