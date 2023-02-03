import React from "react";
import classes from './AvailableMeals.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Ketoprak',
      description: 'Ketoprak consists of sliced fried tofu, rice vermicelli, steamed rice cake, bean sprouts, and garlic, served in peanut sauce and sweet soy sauce, with fried shallots and krupuk as a topping.',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Fried Rice',
      description: 'The most popular comfort food in Indonesia. Nasi goreng can be taken any time, like for breakfast, lunch, or dinner. What makes it different from the other Asian fried rice is Indonesian fried rice have caramelised yet savoury undertones flavour and it have smoky aroma.',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Fritters/Gorengan',
      description: "Fritters usually consists of tempe, tofu, sweet potato, banana, oncom, cassava and aci, which are then coated with flour dough and deep fried in hot oil. There's also bakwan (or Bala-bala, Ote-ote, Yéyé), which is made from dough filled with chopped vegetables.",
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Nasi Lemak',
      description: 'Nasi Lemak is very popular in Malaysia. Even though it has become a national dish, it is also famous in neighboring countries such as Indonesia (Sumatra), Singapore, and Brunei.',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {

    const foodsList = DUMMY_MEALS.map((food) => (
        <MealItem 
            key={food.id} 
            name={food.name} 
            description={food.description} 
            price={food.price}
        />
    ));

    return (
        <div>
            <section className={classes.meals}>
                <Card>
                    <ul>
                        {foodsList}
                    </ul>
                </Card>
            </section>
        </div>
    )
}

export default AvailableMeals