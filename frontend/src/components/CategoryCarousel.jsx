import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
	"Fronyend Developer",
	"Backend Developer",
	"Data Science",
	"Graphic Designer",
	"video Editer",
	"FullStack Developer",
];

const CategoryCarousel = () => {
	return (
		<div>
			<Carousel className="w-full max-w-xl mx-auto my-20">
			<CarouselPrevious />
				<CarouselContent>
					{
            			category.map((cat, idx) => (
						<CarouselItem className="md:basis-1/2 lg-basis-1/3">
							<Button variant="outline" className="rounded-full" > {cat}</Button>
						</CarouselItem>
					))}
				</CarouselContent>
				
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default CategoryCarousel;
