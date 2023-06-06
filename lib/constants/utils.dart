import 'package:amazon_clone/main.dart';
import 'package:flutter/material.dart';

void showSnackBar(BuildContext context, String text) {
  ScaffoldMessengerState? scaffold = MyApp.messangerKey.currentState;
  scaffold?.showSnackBar(
    SnackBar(
      content: Text(text),
    ),
  );
}
