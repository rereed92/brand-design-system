import React from 'react';

export const Layout = () => {
    return (
        <div>
            <h1>Layout</h1>

            <h2 id="breakpoints">Breakpoints</h2>
            <table>
                <thead>
                    <tr>
                        <th>Device</th>
                        <th>Breakpoints(dp)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mobile</td>
                        <td>0 - 960</td>
                    </tr>
                    <tr>
                        <td>Tablet</td>
                        <td>960 - 1280</td>
                    </tr>
                    <tr>
                        <td>Desktop</td>
                        <td>1280 - 1920</td>
                    </tr>
                </tbody>
            </table>
            <p>Layouts over 1920dp wide may let the layout grow until it hits a maximum width. At this point, the grid should become center aligned with increased margins.</p>

            <h2 id="grid">Grid</h2>
            <p>The grid system should be build based on layout with predefined columns. This creates visual consistency between layouts, while allowing flexibility across a wide variety of designs. Margins and gutters follow an 8dp square baseline grid. The number of columns and gutter size is based on the breakpoint system.</p>

            <table>
                <thead>
                    <tr>
                        <th>Breakpoint(dp)</th>
                        <th>Columns</th>
                        <th>Gutter(dp)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0, 360, 400, 480</td>
                        <td>4</td>
                        <td>16</td>
                    </tr>
                    <tr>
                        <td>600, 720</td>
                        <td>8</td>
                        <td>16</td>
                    </tr>
                    <tr>
                        <td>840, 960, 1024, 1280, 1440, 1600, 1920</td>
                        <td>12</td>
                        <td>24</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

