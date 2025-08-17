package handler

import (
	"fmt"
	"go-work-with-shared/mylib"
	"net/http"
)

// Handler function
func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, mylib.Say("hello"))
}
