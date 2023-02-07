import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import styles from "./styles/general.module.scss"
import {ChakraProvider, Heading} from '@chakra-ui/react'
import {AppMenu} from "./components/AppMenu";
import {Translate} from "./pages/Translate";
import {Quiz} from "./pages/Quiz";
import {NotFound} from "./pages/NotFound";
import {History} from "./pages/History";
import TranqlateContextProvider from "./providers/TranqlateContextProvider";
import StorageContextProvider from "./providers/StorageContextProvider";

function App() {
    return (
        <>
            <BrowserRouter>
                <ChakraProvider>
                    <StorageContextProvider>
                        <TranqlateContextProvider>
                            <header className={styles["title"]}>
                                <AppMenu/>
                                <Heading size="md" className={styles["actual-title"]}>tranQlate</Heading>
                            </header>
                            <main>
                                <article>
                                    <Routes>
                                        <Route path='*' element={<NotFound/>}/>
                                        <Route path="/" exact element={<Navigate to={"/translate"}/>}/>
                                        <Route path="/translate" exact element={<Translate/>}/>
                                        <Route path="/quiz" element={<Quiz/>}/>
                                        <Route path="/history" element={<History/>}/>
                                    </Routes>
                                </article>
                            </main>
                        </TranqlateContextProvider>
                    </StorageContextProvider>
                </ChakraProvider>
            </BrowserRouter>
        </>
    );
}

export default App;