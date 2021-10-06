import React from 'react';
import { Container, Typography, CssBaseline } from '@mui/material';

const WebDev = () => {
    return (
        <div>
            <main>
                <Container maxWidth="sm">
                    <Typography variant="h4" textColor="primary">Web Developping</Typography>
                    <p>
                        There are lot of resources available in online included both free and paid courses. Here you will learn from the beginning level of Web Developping to advanced level conceptually. Lets start...
                    </p>
                    <Typography variant="h4" >Documentation Topics</Typography>
                    <CssBaseline />
                    <div>
                        <Typography variant="h5" >HTML</Typography>
                        <ul>
                            <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started">The basics of Hypertext Mark-up Language (HTML)</a>— what exactly is HTML?</li>

                            <li><a target="_blank" href="https://www.sitepoint.com/basic-structure-of-a-web-page/">The basics of Hypertext Mark-up Language (HTML)</a>— the doctype and document 'tree'</li>

                            <li><a target="_blank" href="https://www.sitepoint.com/elements/">Fundamental HTML elements </a>— structural, head, list, form elements and more, explained by category.</li>

                            <li><a target="_blank" href="https://htmldog.com/guides/html/beginner/">HTML beginners tutorial </a>— a tutorial and exercise that recap and take you through the basics you've learned above.</li>

                            <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">HTML elements reference guide </a>— a comprehensive guide to HTML elements with details on how browsers support them</li>
                        </ul>
                    </div>
                    <div>
                        <Typography variant="h5" >CSS</Typography>
                        <ul>
                            <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps">Getting started with CSS </a>— an absolute beginners guide to CSS covers basic concepts and fundamentals</li>

                            <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference">CSS reference guide</a>— a complete guide to CSS with details on the level of Gecko/Firefox support for each.</li>

                            <li><a target="_blank" href="https://www.w3.org/MarkUp/Guide/Style">Christian Heilmann's JavaScript best practices </a>— learn about some of the obvious and (not so) obvious best practices when writing JavaScript.</li>

                        </ul>
                    </div>
                    <div>
                        <Typography variant="h5" >JavaScript</Typography>
                        <Typography variant="body">Begenning level</Typography>
                        <ul>
                            <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics">Getting started with JavaScript</a> — what is JavaScript and how can it help you?</li>

                            <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide">JavaScript reference guide </a>— a comprehensive, regularly updated guide to JavaScript for all levels of learning from beginner to advanced.</li>

                            <li><a target="_blank" href="https://www.youtube.com/playlist?list=PL7664379246A246CB">Crockford on JavaScript </a>— an in-depth video series on the JavaScript language.</li>

                            <li><a target="_blank" href="https://eloquentjavascript.net/1st_edition/contents.html">Eloquent JavaScript </a>— a comprehensive guide to intermediate and advanced JavaScript methodologies</li>
                        </ul>
                    </div>
                    <div>
                        <Typography variant="h5" >JavaScript</Typography>
                        <Typography variant="body">Intermediate level</Typography>
                        <ul>
                            <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">A re-introduction to JavaScript </a> — a recap on the JavaScript programming language aimed at intermediate-level developers</li>

                            <li><a target="_blank" href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/">Essential JavaScript design patterns </a>— an introduction to essential JavaScript design patterns</li>

                            <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects">Introduction to object-oriented JavaScript  </a>— learn about the JavaScript object model.</li>

                            <li><a target="_blank" href="https://dev.opera.com/articles/javascript-best-practices/">Eloquent JavaScript </a>— a comprehensive guide to intermediate and advanced JavaScript methodologies</li>
                        </ul>
                    </div>
                    <div>
                        <Typography variant="h5" >JavaScript</Typography>
                        <Typography variant="body">Advanced level</Typography>
                        <ul>
                            <li><a target="_blank" href="https://johnresig.com/apps/learn/">Learning advanced JavaScript </a>— John Resig's guide to advanced JavaScript</li>

                            <li><a target="_blank" href="https://www.yahoo.com/?guccounter=1&guce_referrer=aHR0cHM6Ly91ay5zY3JlZW4ueWFob28uY29tL3dhdGNoLzExMTU4NS8xMDI3ODIz&guce_referrer_sig=AQAAAB4SkdxQbNYFdWE9czGDhHIOmw-mnFsy-DjzWEqwU_YnUceqkHsYGR_nvRE6QSd3A0DwfELyh84GLBzMkN_QwlCL-5rRtM-7FLWyXyPNHvHMzk6xGYwWIo4L6RYstGBJqW9KeeWEfSmkyw1L86j-_ihJoGegxSi0B7tTWpWhB6Tt">Crockford on Advanced JavaScript </a>— a three part video series on advanced JavaScript concepts</li>

                            <li><a target="_blank" href="https://www.youtube.com/watch?v=PWXkYBmlbB4&list=PLHiZ4m8vCp9MFjMRp9EEHWKArbi0wdgXG&ab_channel=LearnwithSumitBangladesh">JaveScript Tutorials </a>— Learn With Sumit</li>

                        </ul>
                    </div>
                </Container>
            </main>
        </div>
    );
};

export default WebDev;