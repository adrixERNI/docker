import Button from "@/components/ui/Button";

const Home = () => {
    return (
        <div className="flex gap-x-4 items-center justify-center min-h-screen ">
            <Button title="Primary" size="base" radius="full" />
            <Button variant="fade" title="Fade Variant" size="base" radius="full" />
            <Button variant="outline" title="Outline" size="base" radius="full" />
            <Button variant="destructive" title="Destructive" size="base" radius="full" />
            <Button variant="destructive-fade" title="Destructive" size="base" radius="full" />
            <Button variant="ghost" title="Ghost Variant" size="base" radius="full" />
        </div>
    );
};

export default Home;
