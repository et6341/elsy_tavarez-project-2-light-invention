while (true) {
    console.log("light Level: " + input.lightLevel())
    if (input.lightLevel() < 13) {
        light.setAll(light.rgb(255, 0, 0))
    } else if (input.lightLevel() < 6) {
        light.setAll(light.rgb(0, 0, 0))
    }
    
}
