package com.example.demo.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Car;
import com.example.demo.services.CarService;

	@RestController
	public class CarControllers {
		@Autowired
		CarService cser;
		
		@PostMapping("/save_car")
		public Car Save(@RequestBody Car c)
		{
			c.setRegistrationDate(LocalDate.now());
			return cser.Save(c);
		}
		
		@RequestMapping("/getAll")
		public List<Car> carInfo()
		{
			return cser.getAll();
		}
	}
