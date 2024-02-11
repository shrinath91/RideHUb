package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Car;
import com.example.demo.repository.CarsRepository;

@Service
public class CarService {
	
	@Autowired
	CarsRepository crepo;
	
	public Car Save(Car c)
	{
		return crepo.save(c);
	}
	
	public List<Car>getAll()
	{
		return crepo.findAll();
	}
}
