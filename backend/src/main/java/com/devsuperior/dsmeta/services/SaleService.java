package com.devsuperior.dsmeta.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {

    @Autowired
    private SaleRepository repository;
    
    public Page<Sale> findSales(String maxDate, String minDate, Pageable pageable){

        LocalDate max = maxDate.equals("")? LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault()) : LocalDate.parse(maxDate);

        LocalDate min = minDate.equals("")? LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault()).minusYears(1) : LocalDate.parse(minDate);

        return repository.findSales(min, max, pageable);
    }
}
