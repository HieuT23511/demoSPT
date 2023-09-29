import { Outlet } from "react-router-dom";
import MyHeader from "../components/MyHeader";
import MySidebar from "../components/MySidebar";
import { Frame } from "@shopify/polaris";

export default function Layout() {
    const logo = {
        width: 124,
        topBarSource:
            'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
        accessibilityLabel: 'Jaded Pixel',
        url: '/'
    };
    return (
        <Frame
            logo={logo}
            topBar={<MyHeader />}
            navigation={<MySidebar />}
        >
            <Outlet></Outlet>
        </Frame>
    )
}