import Cart from "@/components/Cart";
import Chatbot from "@/components/Chatbot";
import Environment from "@/components/Environment";
import FoodCards from "@/components/FoodCards";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div>
      {/* Add your content here */}

      <Header/>
      <Hero/>
      <FoodCards/>
      <Environment/>
      <Chatbot/>
      <Footer/>
     
    </div>
  );
}
