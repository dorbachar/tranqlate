import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {NotFound} from "./pages/NotFound";
import styles from "./styles/general.module.scss"
import {ChakraProvider, Heading} from '@chakra-ui/react'
import {Translate} from "./pages/Translate";
import {AppMenu} from "./elements/AppMenu";

function App() {
    return (
        <>
            <ChakraProvider>
                <header className={styles["title"]}>
                    <AppMenu/>
                    <Heading size="md" className={styles["actual-title"]}>tranQlate</Heading>
                </header>
                <main>
                    <article>
                        <BrowserRouter>
                            <Switch>
                                <Route path="/" exact>
                                    <Translate/>
                                </Route>
                                <Route path="/404">
                                    <NotFound/>
                                </Route>
                                <Route>
                                    <Redirect to="/404"/>
                                </Route>
                            </Switch>
                        </BrowserRouter>
                    </article>
                </main>
            </ChakraProvider>
        </>
    );
}

export default App;