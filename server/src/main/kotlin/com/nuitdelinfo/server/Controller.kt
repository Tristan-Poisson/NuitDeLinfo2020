package com.nuitdelinfo.server

import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class Controller(val surferFormRepository: SurferFormRepository) {
    // @GetMapping("/")
    // fun home() = "Hello world!"

    @GetMapping("/form", produces = ["application/json"])
    fun getForms() =
        Json.encodeToString(surferFormRepository.findAll().toList())

    @PostMapping("/form", produces = ["application/json"])
    fun postForms(@RequestBody surferFormModel: SurferFormModel) =
        Json.encodeToString(surferFormRepository.save(surferFormModel))
}
