import type { Session } from '../types';

const algebraCurriculum: Session[] = [
    {
        session: "Session 1: Foundations of Algebra",
        topics: [
            {
                name: "Variables and Expressions",
                examples: [
                    "Example 1: Simplify the expression 2x + 5.",
                    "Example 2: Evaluate 3y - 7 when y = 4."
                ],
                exercises: [
                    "Exercise 1: If z = 3, what is the value of 5z + 2?",
                    "Exercise 2: Solve for a: 4a - 1 = 11."
                ]
            },
            {
                name: "Order of Operations (PEMDAS/BODMAS)",
                examples: [
                    "Example 1: Simplify the expression 10 + 2 * (6 - 3)^2.",
                    "Example 2: Evaluate 20 / 5 + 3 * 4."
                ],
                exercises: [
                    "Exercise 1: Simplify 8 + 4 * 2 - (6 / 3).",
                    "Exercise 2: Evaluate 15 - (4 + 1)^2."
                ]
            },
            {
                name: "Real Number System",
                examples: [
                    "Example 1: Classify the number √25 as a natural, integer, rational, or irrational number.",
                    "Example 2: Is 0.333... a rational or irrational number?"
                ],
                exercises: [
                    "Exercise 1: Classify the number -7.",
                    "Exercise 2: Is π a rational or irrational number?"
                ]
            },
            {
                name: "Properties of Real Numbers",
                examples: [
                    "Example 1: Identify the property shown in the equation 5 + 3 = 3 + 5.",
                    "Example 2: Identify the property: 2 * (3 + 4) = 2*3 + 2*4."
                ],
                exercises: [
                    "Exercise 1: What property is shown: (1 + 2) + 3 = 1 + (2 + 3)?",
                    "Exercise 2: What is the multiplicative identity property?"
                ]
            }
        ],
        skills: ["Evaluating expressions", "simplifying expressions", "identifying number types", "and applying properties of real numbers."]
    },
    {
        session: "Session 2: Solving One-Step and Two-Step Linear Equations",
        topics: [
            {
                name: "What is an Equation?",
                examples: [
                    "Example 1: Determine if the statement 5x - 7 = 18 is an equation or an expression.",
                    "Example 2: Explain the difference between an equation and an inequality."
                ],
                exercises: [
                    "Exercise 1: Write an equation that represents 'five more than a number is ten'.",
                    "Exercise 2: Is 2x + 4 an expression or an equation? Why?"
                ]
            },
            {
                name: "Inverse Operations",
                examples: [
                    "Example 1: What is the inverse operation of multiplication?",
                    "Example 2: What is the inverse operation of a square root?"
                ],
                exercises: [
                    "Exercise 1: What is the inverse operation of division?",
                    "Exercise 2: What is the inverse operation of adding 5?"
                ]
            },
            {
                name: "Solving One-Step Equations",
                examples: [
                    "Example 1: Solve for y in the equation y - 9 = 2.",
                    "Example 2: Solve for x in the equation 3x = 18."
                ],
                exercises: [
                    "Exercise 1: Solve for a: a + 7 = 15.",
                    "Exercise 2: Solve for b: b / 4 = 5."
                ]
            },
            {
                name: "Solving Two-Step Equations",
                examples: [
                    "Example 1: Solve for z in the equation 4z + 10 = 26.",
                    "Example 2: Solve for w: w/3 - 5 = 2."
                ],
                exercises: [
                    "Exercise 1: Solve for x: 2x - 3 = 7.",
                    "Exercise 2: Solve for y: 5y + 1 = -9."
                ]
            }
        ],
        skills: ["Applying inverse operations", "solving one- and two-step equations", "and checking solutions."]
    },
    {
        session: "Session 3: Solving Multi-Step Linear Equations",
        topics: [
            {
                name: "Distributive Property",
                examples: [
                    "Example 1: Simplify the expression 3(x + 4).",
                    "Example 2: Simplify -2(5y - 3)."
                ],
                exercises: [
                    "Exercise 1: Simplify 4(a - 6).",
                    "Exercise 2: Simplify -5(2x + 8)."
                ]
            },
            {
                name: "Combining Like Terms",
                examples: [
                    "Example 1: Simplify the expression 7a + 2b - 5a + b.",
                    "Example 2: Simplify 3x^2 + 5x - x^2 + 2x."
                ],
                exercises: [
                    "Exercise 1: Simplify 9y - 3z + 2y - z.",
                    "Exercise 2: Simplify 4ab + 2a - 3ab + 5a."
                ]
            },
            {
                name: "Variables on Both Sides",
                examples: [
                    "Example 1: Solve for x in the equation 5x + 3 = 2x + 12.",
                    "Example 2: Solve for m: 4m - 6 = 2m + 8."
                ],
                exercises: [
                    "Exercise 1: Solve for y: 3y + 5 = 6y - 4.",
                    "Exercise 2: Solve for n: 7n - 10 = 3n + 2."
                ]
            },
            {
                name: "Special Cases (no solution, infinitely many solutions)",
                examples: [
                    "Example 1: Solve for y in the equation 4y + 8 = 4y - 1. (No Solution)",
                    "Example 2: Solve for x: 2x + 6 = 2(x + 3). (Infinitely Many Solutions)"
                ],
                exercises: [
                    "Exercise 1: Solve for a: 5a - 3 = 5a + 1.",
                    "Exercise 2: Solve for b: 3(b + 2) = 3b + 6."
                ]
            }
        ],
        skills: ["Solving equations with multiple steps and handling equations with fractions or decimals."]
    },
    {
        session: "Session 4: Introduction to Linear Inequalities",
        topics: [
            {
                name: "Inequality Symbols",
                examples: [
                    "Example 1: Translate the phrase 'A number is no more than 10' into an inequality.",
                    "Example 2: Translate 'The minimum score to pass is 70' into an inequality."
                ],
                exercises: [
                    "Exercise 1: Translate 'The speed limit is 55 mph' into an inequality.",
                    "Exercise 2: Write an inequality for 'A number is less than 5'."
                ]
            },
            {
                name: "Graphing Inequalities on a Number Line",
                examples: [
                    "Example 1: Graph the inequality x ≤ 5 on a number line.",
                    "Example 2: Graph the inequality x > -2 on a number line."
                ],
                exercises: [
                    "Exercise 1: Graph x ≥ 3 on a number line.",
                    "Exercise 2: Graph x < 0 on a number line."
                ]
            },
            {
                name: "Solving One-Step and Two-Step Inequalities",
                examples: [
                    "Example 1: Solve for x in the inequality -2x + 5 > 1.",
                    "Example 2: Solve for y: 3y - 4 ≤ 8."
                ],
                exercises: [
                    "Exercise 1: Solve for a: a + 6 < 10.",
                    "Exercise 2: Solve for b: 5b - 2 ≥ 13."
                ]
            }
        ],
        skills: ["Translating verbal phrases to inequalities", "solving inequalities", "and graphing solutions."]
    },
    {
        session: "Session 5: Graphing Linear Equations",
        topics: [
            {
                name: "Coordinate Plane",
                examples: [
                    "Example 1: Plot the point (3, -2) on a coordinate plane.",
                    "Example 2: What are the coordinates of the origin?"
                ],
                exercises: [
                    "Exercise 1: Plot the points (-1, 4) and (2, 0).",
                    "Exercise 2: In which quadrant is the point (-3, -5)?"
                ]
            },
            {
                name: "Linear Equations (y=mx+b)",
                examples: [
                    "Example 1: Identify the slope and y-intercept of the equation y = 3x - 4.",
                    "Example 2: Write an equation for a line with a slope of 1/2 and a y-intercept of 5."
                ],
                exercises: [
                    "Exercise 1: Identify the slope and y-intercept of y = -5x + 2.",
                    "Exercise 2: Write an equation for a line with a slope of -2 and a y-intercept of -1."
                ]
            },
            {
                name: "Slope",
                examples: [
                    "Example 1: Find the slope of the line that passes through the points (1, 2) and (4, 8).",
                    "Example 2: Find the slope of a line passing through (-2, 5) and (3, -5)."
                ],
                exercises: [
                    "Exercise 1: Find the slope of the line passing through (0, 0) and (4, 12).",
                    "Exercise 2: Find the slope of a horizontal line."
                ]
            },
            {
                name: "Graphing Using Slope-Intercept Form and Intercepts",
                examples: [
                    "Example 1: Graph the equation y = 2x - 3 using its slope and y-intercept.",
                    "Example 2: Graph the equation 3x + 2y = 6 using the x and y-intercepts."
                ],
                exercises: [
                    "Exercise 1: Graph y = -x + 4.",
                    "Exercise 2: Graph 4x - y = 8."
                ]
            }
        ],
        skills: ["Plotting points", "calculating and interpreting slope", "and graphing linear equations."]
    },
    {
        session: "Session 6: Writing Linear Equations and Parallel/Perpendicular Lines",
        topics: [
            {
                name: "Writing Equations from Graphs, Two Points, or a Point and Slope",
                examples: [
                    "Example 1: Write the equation of a line with a slope of 4 that passes through the point (2, 5).",
                    "Example 2: Write the equation of a line passing through the points (2, 1) and (4, 7)."
                ],
                exercises: [
                    "Exercise 1: Write the equation of a line with a slope of -3 that passes through (1, 2).",
                    "Exercise 2: Write the equation of a line passing through (0, 4) and (3, 10)."
                ]
            },
            {
                name: "Parallel and Perpendicular Lines",
                examples: [
                    "Example 1: What is the slope of a line perpendicular to y = -2x + 7?",
                    "Example 2: What is the slope of a line parallel to y = 4x - 1?"
                ],
                exercises: [
                    "Exercise 1: Find the slope of a line perpendicular to y = 1/3x + 2.",
                    "Exercise 2: Write the equation of a line parallel to y = 5x + 3 that passes through the point (1, -2)."
                ]
            }
        ],
        skills: ["Formulating linear equations and identifying/writing equations for parallel and perpendicular lines."]
    },
    {
        session: "Session 7: Systems of Linear Equations (Graphing and Substitution)",
        topics: [
            {
                name: "What is a System?",
                examples: [
                    "Example 1: Define what a system of linear equations is and what its solution represents.",
                    "Example 2: Give an example of a system with one solution."
                ],
                exercises: [
                    "Exercise 1: Describe the graphical representation of a system with no solution.",
                    "Exercise 2: How many solutions does a system of two identical equations have?"
                ]
            },
            {
                name: "Solving by Graphing",
                examples: [
                    "Example 1: Solve the system by graphing: y = x + 1 and y = -x + 3.",
                    "Example 2: Solve the system by graphing: y = 2x and y = x - 2."
                ],
                exercises: [
                    "Exercise 1: Solve the system by graphing: y = 3x - 1 and y = -x + 3.",
                    "Exercise 2: What is the solution to the system y = -x + 5 and y = x + 1?"
                ]
            },
            {
                name: "Solving by Substitution",
                examples: [
                    "Example 1: Solve the system by substitution: y = x + 2 and 2x + y = 11.",
                    "Example 2: Solve the system by substitution: x = 2y - 1 and 3x + y = 10."
                ],
                exercises: [
                    "Exercise 1: Solve the system by substitution: y = 2x - 4 and 3x - y = 5.",
                    "Exercise 2: Solve the system by substitution: x + y = 6 and 2x - 3y = 2."
                ]
            },
            {
                name: "Types of Solutions",
                examples: [
                    "Example 1: Describe what an 'inconsistent' system of equations means in terms of its solution.",
                    "Example 2: What does it mean for a system to be 'dependent'?"
                ],
                exercises: [
                    "Exercise 1: Identify if the system y = 2x + 1 and y = 2x - 3 has one solution, no solution, or infinitely many solutions.",
                    "Exercise 2: What type of solution does the system y = x + 5 and 2y = 2x + 10 have?"
                ]
            }
        ],
        skills: ["Solving systems of equations using graphing and substitution."]
    },
    {
        session: "Session 8: Systems of Linear Equations (Elimination) and Word Problems",
        topics: [
            {
                name: "Solving by Elimination (Addition/Subtraction/Multiplication)",
                examples: [
                    "Example 1: Solve the system by elimination: 2x + y = 7 and x - y = 2.",
                    "Example 2: Solve the system by elimination: 2x + 3y = 5 and 4x + 6y = 10."
                ],
                exercises: [
                    "Exercise 1: Solve the system by elimination: 3x + 2y = 8 and 3x - 2y = 4.",
                    "Exercise 2: Solve the system by elimination: 2x + y = 1 and x + 3y = 8."
                ]
            },
            {
                name: "Word Problems with Systems",
                examples: [
                    "Example 1: The sum of two numbers is 10. Their difference is 2. What are the two numbers?",
                    "Example 2: A store sells tickets for a play. A child ticket is 5 and an adult ticket is 10. If 100 tickets were sold for a total of 750, how many of each were sold?"
                ],
                exercises: [
                    "Exercise 1: The perimeter of a rectangle is 24 inches. The length is 2 inches more than the width. Find the dimensions.",
                    "Exercise 2: A farmer sells apples and oranges. Apples cost 1.50 each and oranges cost 2.00 each. If he sells 50 fruits for a total of 85, how many of each did he sell?"
                ]
            }
        ],
        skills: ["Solving systems of equations using elimination and translating word problems into systems."]
    },
    {
        session: "Session 9: Exponents and Exponential Functions",
        topics: [
            {
                name: "Properties of Exponents",
                examples: [
                    "Example 1: Simplify the expression (x^3y^2)^4.",
                    "Example 2: Simplify x^5 * x^2 / x^3."
                ],
                exercises: [
                    "Exercise 1: Simplify (2a^2b)^3.",
                    "Exercise 2: Simplify (x^5y^4) / (x^2y^3)."
                ]
            },
            {
                name: "Scientific Notation",
                examples: [
                    "Example 1: Convert 3,450,000 to scientific notation.",
                    "Example 2: Convert 2.5 x 10^-3 to standard form."
                ],
                exercises: [
                    "Exercise 1: Convert 0.0000078 to scientific notation.",
                    "Exercise 2: Convert 1.4 x 10^5 to standard form."
                ]
            },
            {
                name: "Introduction to Exponential Functions",
                examples: [
                    "Example 1: Graph the function y = 2^x.",
                    "Example 2: Graph y = (1/2)^x."
                ],
                exercises: [
                    "Exercise 1: Does the function y = 3^x show exponential growth or decay?",
                    "Exercise 2: What is the y-intercept of the function y = 4^x?"
                ]
            }
        ],
        skills: ["Simplifying expressions with exponents", "working with scientific notation", "and graphing basic exponential functions."]
    },
    {
        session: "Session 10: Polynomials and Factoring (Part 1)",
        topics: [
            {
                name: "Introduction to Polynomials",
                examples: [
                    "Example 1: Classify the polynomial 5x^3 - 2x + 1 by degree and number of terms.",
                    "Example 2: Classify the polynomial 4y^2 - 3y."
                ],
                exercises: [
                    "Exercise 1: Classify the polynomial 6x^4.",
                    "Exercise 2: What is the degree of the polynomial 7x^3 + 2x^5 - 4?"
                ]
            },
            {
                name: "Adding and Subtracting Polynomials",
                examples: [
                    "Example 1: Add (2x^2 + 3x - 1) + (x^2 - x + 5).",
                    "Example 2: Subtract (5y^2 + 2y) - (3y^2 - y + 4)."
                ],
                exercises: [
                    "Exercise 1: Add (4a + 7) + (2a - 3).",
                    "Exercise 2: Subtract (6b^3 - b) - (b^3 + 5b)."
                ]
            },
            {
                name: "Multiplying Polynomials (FOIL Method)",
                examples: [
                    "Example 1: Multiply (x + 2)(x - 3).",
                    "Example 2: Multiply (2y - 1)(y + 5)."
                ],
                exercises: [
                    "Exercise 1: Multiply (a + 4)(a + 5).",
                    "Exercise 2: Multiply (3x - 2)(x - 4)."
                ]
            }
        ],
        skills: ["Classifying polynomials and performing addition, subtraction, and multiplication."]
    },
    {
        session: "Session 11: Polynomials and Factoring (Part 2)",
        topics: [
            {
                name: "Greatest Common Factor (GCF)",
                examples: [
                    "Example 1: Find the GCF of the terms 6a^2b and 9ab^3.",
                    "Example 2: Factor out the GCF from the expression 4x^3 + 8x^2."
                ],
                exercises: [
                    "Exercise 1: Find the GCF of 12xy^2 and 18x^2y.",
                    "Exercise 2: Factor out the GCF from 15a^2b - 20ab."
                ]
            },
            {
                name: "Factoring Trinomials (x^2+bx+c) and (ax^2+bx+c)",
                examples: [
                    "Example 1: Factor the trinomial x^2 + 5x + 6.",
                    "Example 2: Factor 2x^2 + 7x + 3."
                ],
                exercises: [
                    "Exercise 1: Factor x^2 + 7x + 10.",
                    "Exercise 2: Factor 3x^2 - 10x - 8."
                ]
            }
        ],
        skills: ["Factoring polynomials using GCF and factoring trinomials."]
    },
    {
        session: "Session 12: Factoring Special Products and Solving Quadratic Equations by Factoring",
        topics: [
            {
                name: "Difference of Squares",
                examples: [
                    "Example 1: Factor the expression x^2 - 49.",
                    "Example 2: Factor 4y^2 - 25."
                ],
                exercises: [
                    "Exercise 1: Factor a^2 - 81.",
                    "Exercise 2: Factor 9x^2 - 16y^2."
                ]
            },
            {
                name: "Perfect Square Trinomials",
                examples: [
                    "Example 1: Factor the trinomial x^2 + 6x + 9.",
                    "Example 2: Factor 4x^2 - 12x + 9."
                ],
                exercises: [
                    "Exercise 1: Factor y^2 - 8y + 16.",
                    "Exercise 2: Factor 25a^2 + 10a + 1."
                ]
            },
            {
                name: "Zero Product Property",
                examples: [
                    "Example 1: Solve the equation (x-2)(x+5) = 0.",
                    "Example 2: Solve x(x-3) = 0."
                ],
                exercises: [
                    "Exercise 1: Solve (y+4)(y-6) = 0.",
                    "Exercise 2: Solve 3a(2a + 1) = 0."
                ]
            },
            {
                name: "Solving Quadratic Equations by Factoring",
                examples: [
                    "Example 1: Solve the equation x^2 + 3x - 10 = 0 by factoring.",
                    "Example 2: Solve 2x^2 + 5x = 3."
                ],
                exercises: [
                    "Exercise 1: Solve x^2 - 9x + 14 = 0.",
                    "Exercise 2: Solve 3y^2 + 5y = 2."
                ]
            }
        ],
        skills: ["Recognizing and factoring special products and solving quadratic equations."]
    },
    {
        session: "Session 13: Quadratic Equations (Quadratic Formula and Graphing)",
        topics: [
            {
                name: "Quadratic Formula",
                examples: [
                    "Example 1: Use the quadratic formula to solve x^2 + 5x + 6 = 0.",
                    "Example 2: Use the quadratic formula to solve 2x^2 - 3x - 5 = 0."
                ],
                exercises: [
                    "Exercise 1: Use the quadratic formula to solve x^2 - 4x + 1 = 0.",
                    "Exercise 2: Use the quadratic formula to solve 3x^2 + 2x - 1 = 0."
                ]
            },
            {
                name: "Discriminant",
                examples: [
                    "Example 1: Determine the number of real solutions for the equation x^2 - 4x + 4 = 0 using the discriminant.",
                    "Example 2: What is the discriminant of 3x^2 + 2x + 1 = 0?"
                ],
                exercises: [
                    "Exercise 1: Find the discriminant of x^2 + 5x + 2 = 0 and determine the number of real solutions.",
                    "Exercise 2: What is the discriminant of 2x^2 - 7x + 6 = 0?"
                ]
            },
            {
                name: "Graphing Quadratic Functions (Parabolas)",
                examples: [
                    "Example 1: Find the vertex of the parabola y = x^2 - 4x + 3.",
                    "Example 2: Graph the parabola y = x^2 + 2x - 3."
                ],
                exercises: [
                    "Exercise 1: Find the vertex of the parabola y = -x^2 + 6x - 5.",
                    "Exercise 2: What is the axis of symmetry for y = 2x^2 - 8x?"
                ]
            }
        ],
        skills: ["Solving equations with the quadratic formula", "interpreting the discriminant", "and graphing parabolas."]
    },
    {
        session: "Session 14: Radical Expressions and Equations",
        topics: [
            {
                name: "Simplifying Radicals",
                examples: [
                    "Example 1: Simplify √50.",
                    "Example 2: Simplify √72."
                ],
                exercises: [
                    "Exercise 1: Simplify √27.",
                    "Exercise 2: Simplify √98."
                ]
            },
            {
                name: "Adding/Subtracting/Multiplying/Dividing Radicals",
                examples: [
                    "Example 1: Simplify the expression 3√2 + 5√2.",
                    "Example 2: Simplify (√3) * (√12)."
                ],
                exercises: [
                    "Exercise 1: Simplify 4√3 - 2√3.",
                    "Exercise 2: Simplify (√5) * (√20)."
                ]
            },
            {
                name: "Solving Radical Equations",
                examples: [
                    "Example 1: Solve for x in the equation √(x + 2) = 5.",
                    "Example 2: Solve √(3x - 5) = 4."
                ],
                exercises: [
                    "Exercise 1: Solve for y in the equation √(y - 1) = 3.",
                    "Exercise 2: Solve √(2z + 4) = 6."
                ]
            }
        ],
        skills: ["Performing operations with radical expressions and solving radical equations."]
    },
    {
        session: "Session 15: Rational Expressions and Equations",
        topics: [
            {
                name: "Simplifying Rational Expressions",
                examples: [
                    "Example 1: Simplify the expression (x^2 - 4) / (x + 2).",
                    "Example 2: Simplify (3x + 9) / (x + 3)."
                ],
                exercises: [
                    "Exercise 1: Simplify (a^2 - 1) / (a - 1).",
                    "Exercise 2: Simplify (2b - 8) / (b - 4)."
                ]
            },
            {
                name: "Multiplying/Dividing/Adding/Subtracting Rational Expressions",
                examples: [
                    "Example 1: Add the expressions 1/x + 2/y.",
                    "Example 2: Multiply (x/2) * (4/x^2)."
                ],
                exercises: [
                    "Exercise 1: Subtract 3/a - 1/a.",
                    "Exercise 2: Divide (b+1)/5 by (b+1)/10."
                ]
            },
            {
                name: "Solving Rational Equations",
                examples: [
                    "Example 1: Solve the equation 2/x = 1/3.",
                    "Example 2: Solve 1/(x+1) = 2/(x-1)."
                ],
                exercises: [
                    "Exercise 1: Solve for a: 3/(a+2) = 1/2.",
                    "Exercise 2: Solve for x: 5/x = 10."
                ]
            }
        ],
        skills: ["Manipulating and solving equations with rational expressions."]
    },
    {
        session: "Session 16: Functions (Advanced) and Review",
        topics: [
            {
                name: "Function Notation (f(x))",
                examples: [
                    "Example 1: If f(x) = 2x + 3, find f(4).",
                    "Example 2: If g(x) = x^2 - 1, find g(-2)."
                ],
                exercises: [
                    "Exercise 1: If f(x) = 5x - 7, find f(3).",
                    "Exercise 2: If h(x) = x^2 + 2x, find h(1)."
                ]
            },
            {
                name: "Domain and Range",
                examples: [
                    "Example 1: Find the domain of the function f(x) = √(x - 3).",
                    "Example 2: Find the range of the function g(x) = x^2."
                ],
                exercises: [
                    "Exercise 1: What is the domain of the function f(x) = 1/(x - 5)?",
                    "Exercise 2: What is the range of the function f(x) = |x|?"
                ]
            },
            {
                name: "Function Operations",
                examples: [
                    "Example 1: If f(x) = x + 1 and g(x) = x^2, find (f + g)(x).",
                    "Example 2: If f(x) = 2x and g(x) = x - 3, find (f - g)(x)."
                ],
                exercises: [
                    "Exercise 1: If f(x) = x^2 + 1 and g(x) = 2x, find (f * g)(x).",
                    "Exercise 2: If f(x) = 4x and g(x) = 2, find (f / g)(x)."
                ]
            },
            {
                name: "Comprehensive Review",
                examples: [
                    "Example 1: Solve the equation 3(x + 2) = 15.",
                    "Example 2: Factor x^2 - 16."
                ],
                exercises: [
                    "Exercise 1: Solve the inequality -2x + 3 < 9.",
                    "Exercise 2: What is the slope of the line that passes through (1, 1) and (3, 5)?"
                ]
            }
        ],
        skills: ["Working with function notation", "determining domain and range", "and reviewing all major Algebra 1 concepts."]
    },
];

const geometryCurriculum: Session[] = [
    {
        session: "Session 1: Geometry Foundations",
        topics: [
            {
                name: "Points, Lines, and Planes",
                examples: ["Example 1: Define a point.", "Example 2: What is the intersection of two lines?"],
                exercises: ["Exercise 1: Draw a plane containing three non-collinear points.", "Exercise 2: Identify parallel lines in the classroom."]
            },
            {
                name: "Angles",
                examples: ["Example 1: Define an acute angle.", "Example 2: What is a supplementary angle?"],
                exercises: ["Exercise 1: Measure a 90-degree angle.", "Exercise 2: Find the complement of a 30-degree angle."]
            }
        ],
        skills: ["Identifying basic geometric figures", "Understanding angle relationships"]
    },
    {
        session: "Session 2: Triangles",
        topics: [
            {
                name: "Types of Triangles",
                examples: ["Example 1: Define an equilateral triangle.", "Example 2: What is a scalene triangle?"],
                exercises: ["Exercise 1: Draw an isosceles right triangle.", "Exercise 2: Can a triangle have two obtuse angles?"]
            },
            {
                name: "Pythagorean Theorem",
                examples: ["Example 1: In a right triangle, if a=3 and b=4, what is c?", "Example 2: State the Pythagorean theorem."],
                exercises: ["Exercise 1: A right triangle has a hypotenuse of 13 and a leg of 5. Find the other leg.", "Exercise 2: Is a triangle with sides 5, 12, and 13 a right triangle?"]
            }
        ],
        skills: ["Classifying triangles", "Applying the Pythagorean theorem"]
    }
];

export const availableCurriculums = {
    algebra: {
        name: "Algebra 1",
        data: algebraCurriculum,
    },
    geometry: {
        name: "Geometry Basics",
        data: geometryCurriculum,
    }
};
