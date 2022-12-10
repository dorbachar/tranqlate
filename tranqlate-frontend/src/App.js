import './App.css';
import {Route, Redirect, Switch, BrowserRouter} from "react-router-dom";
import {NotFound} from "./pages/NotFound";
import {Translate} from "./pages/Translate";
import styles from "./styles/general.module.scss"

function App() {
    return (
        <>
            <header className={styles["title"]}>
                <h1>tranQlate</h1>
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
        </>
    );
}

export default App;