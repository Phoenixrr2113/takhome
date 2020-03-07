package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import java.util.UUID;

public class Person {

    private final UUID id;

    @NotBlank
    private final String name;

    private final String dob;

    public Person(@JsonProperty("id") UUID id,
                  @JsonProperty("name") String name, String dob) {
        this.id = id;
        this.name = name;
        this.dob = dob;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDob() {
        return dob;
    }
}
