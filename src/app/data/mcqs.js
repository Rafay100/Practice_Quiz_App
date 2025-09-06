const mcqs = 
[
  {
    "id": 1,
    "category": "Python Basics",
    "question": "What is the correct way to print 'Hello World' in Python?",
    "options": ["echo('Hello World')", "print('Hello World')", "printf('Hello World')", "console.log('Hello World')"],
    "answerIndex": 1,
    "explanation": "In Python, the built-in function `print()` is used to output text."
  },
  {
    "id": 2,
    "category": "Python Basics",
    "question": "Which of these is NOT a valid Python data type?",
    "options": ["list", "dict", "tuple", "arraylist"],
    "answerIndex": 3,
    "explanation": "`arraylist` is from Java, not Python. Python uses `list`."
  },
  {
    "id": 3,
    "category": "Data Structures",
    "question": "What is the output of `len({'a':1,'b':2,'c':3})`?",
    "options": ["3", "6", "2", "Error"],
    "answerIndex": 0,
    "explanation": "The dictionary has 3 key-value pairs, so len = 3."
  },
  {
    "id": 4,
    "category": "Data Structures",
    "question": "Which Python collection is ordered and changeable, and allows duplicate members?",
    "options": ["Set", "Dictionary", "List", "Tuple"],
    "answerIndex": 2,
    "explanation": "Lists are ordered, mutable, and allow duplicates."
  },
  {
    "id": 5,
    "category": "Control Flow",
    "question": "What will `range(2,10,2)` produce?",
    "options": ["[2,4,6,8]", "[2,3,4,5,6,7,8,9]", "[2,10]", "[0,2,4,6,8,10]"],
    "answerIndex": 0,
    "explanation": "`range(start, stop, step)` generates numbers 2,4,6,8."
  },
  {
    "id": 6,
    "category": "Functions",
    "question": "What keyword is used to define a function in Python?",
    "options": ["func", "define", "def", "function"],
    "answerIndex": 2,
    "explanation": "In Python, functions are defined using `def`."
  },
  {
    "id": 7,
    "category": "Functions",
    "question": "What is the default return value of a Python function that does not explicitly return anything?",
    "options": ["0", "None", "Empty string", "Error"],
    "answerIndex": 1,
    "explanation": "If no return is specified, Python functions return `None`."
  },
  {
    "id": 8,
    "category": "Agentic AI",
    "question": "In OpenAI Agents SDK, what is an 'Agent'?",
    "options": ["A chatbot only", "An AI with instructions and tools", "A user interface", "A database manager"],
    "answerIndex": 1,
    "explanation": "An Agent is an AI with instructions and optionally tools to complete tasks."
  },
  {
    "id": 9,
    "category": "Agentic AI",
    "question": "What is a 'handoff' in OpenAI Agents SDK?",
    "options": ["When an agent stops running", "When a user logs out", "When one agent transfers the task to another agent", "When the system restarts"],
    "answerIndex": 2,
    "explanation": "Handoff = transferring control between agents."
  },
  {
    "id": 10,
    "category": "Agentic AI",
    "question": "What is a guardrail in Agents SDK?",
    "options": ["A debugging tool", "A validation mechanism for inputs/outputs", "A type of agent", "A user role"],
    "answerIndex": 1,
    "explanation": "Guardrails validate inputs and outputs to ensure safety."
  },
  {
    "id": 11,
    "category": "uv Tool",
    "question": "What does uv mainly manage?",
    "options": ["Databases", "Python projects and packages", "Operating systems", "Machine learning models"],
    "answerIndex": 1,
    "explanation": "uv is an all-in-one tool for managing Python projects."
  },
  {
    "id": 12,
    "category": "uv Tool",
    "question": "Which two files are core to uv projects?",
    "options": ["requirements.txt and setup.py", "pyproject.toml and uv.lock", "main.py and config.json", "Pipfile and Pipfile.lock"],
    "answerIndex": 1,
    "explanation": "uv uses `pyproject.toml` (declared requirements) and `uv.lock` (resolved versions)."
  },
  {
    "id": 13,
    "category": "APIs",
    "question": "In the restaurant analogy, what does the API represent?",
    "options": ["The customer", "The waiter", "The chef", "The kitchen"],
    "answerIndex": 1,
    "explanation": "API = waiter who delivers requests between client and system."
  },
  {
    "id": 14,
    "category": "APIs",
    "question": "Which request type is usually used to fetch data from an API?",
    "options": ["POST", "GET", "PUT", "DELETE"],
    "answerIndex": 1,
    "explanation": "`GET` is used for fetching data."
  },
  {
    "id": 15,
    "category": "APIs",
    "question": "Which OpenAI API is stateless and requires sending the full conversation every time?",
    "options": ["Responses API", "Chat Completions API", "Embeddings API", "Image API"],
    "answerIndex": 1,
    "explanation": "Chat Completions is stateless; full history must be sent each time."
  },
    {
    "id": 16,
    "category": "Functions",
    "question": "What will this code print?\n\ndef f(a, L=[]):\n  L.append(a)\n  return L\n\nprint(f(1))\nprint(f(2))\nprint(f(3))",
    "options": ["[1] [2] [3]", "[1] [1, 2] [1, 2, 3]", "[1] [1, 2] [3]", "Error"],
    "answerIndex": 1,
    "explanation": "Default list L is shared across calls. Calls append to the same list."
  },
  {
    "id": 17,
    "category": "Strings",
    "question": "What does 'Python'[::-1] produce?",
    "options": ["nohtyP", "Python", "Error", "Pytho"],
    "answerIndex": 0,
    "explanation": "Slice with step -1 reverses the string."
  },
  {
    "id": 18,
    "category": "OOP",
    "question": "Which method is called when a new instance of a class is created?",
    "options": ["__del__", "__init__", "__call__", "__repr__"],
    "answerIndex": 1,
    "explanation": "__init__ is the initializer run after object creation."
  },
  {
    "id": 19,
    "category": "Exceptions",
    "question": "Which exception is raised by 1/0 in Python?",
    "options": ["ValueError", "ZeroDivisionError", "TypeError", "OverflowError"],
    "answerIndex": 1,
    "explanation": "Division by zero raises ZeroDivisionError."
  },
  {
    "id": 20,
    "category": "Operators",
    "question": "What is the difference between 'is' and '==' in Python?",
    "options": ["No difference", "'is' checks identity, '==' checks equality", "'is' checks equality, '==' checks identity", "Both compare memory address"],
    "answerIndex": 1,
    "explanation": "'is' tests whether two names point to the same object; '==' tests value equality."
  },
  {
    "id": 21,
    "category": "Lists",
    "question": "What will this print?\n\na = [1,2,3]\nb = a[:]\nb.append(4)\nprint(a, b)",
    "options": ["[1,2,3] [1,2,3,4]", "[1,2,3,4] [1,2,3,4]", "[1,2,3,4] [1,2,3]", "Error"],
    "answerIndex": 0,
    "explanation": "a[:] makes a shallow copy. Appending to b doesn't change a."
  },
  {
    "id": 22,
    "category": "Tuples vs Lists",
    "question": "Which statement is true about tuples?",
    "options": ["Tuples are mutable", "Tuples are immutable", "Tuples allow duplicate keys", "Tuples are unordered mappings"],
    "answerIndex": 1,
    "explanation": "Tuples are immutable sequences; their elements cannot be changed."
  },
  {
    "id": 23,
    "category": "Modules",
    "question": "Which module is commonly used to work with JSON in Python?",
    "options": ["xml", "json", "csv", "pickle"],
    "answerIndex": 1,
    "explanation": "The json module provides dumps/loads for JSON serialization."
  },
  {
    "id": 24,
    "category": "File I/O",
    "question": "Which file mode opens a file for writing and truncates it if it exists?",
    "options": ["'r'", "'a'", "'w'", "'x'"],
    "answerIndex": 2,
    "explanation": "'w' opens for writing and truncates existing file."
  },
  {
    "id": 25,
    "category": "Comprehensions",
    "question": "What does [x*2 for x in range(3)] produce?",
    "options": ["[0,2,4]", "[2,4,6]", "[0,1,2]", "Error"],
    "answerIndex": 0,
    "explanation": "range(3) yields 0,1,2; multiply by 2 gives [0,2,4]."
  },
  {
    "id": 26,
    "category": "Sets",
    "question": "Which of these can NOT be an element of a Python set?",
    "options": ["Integer", "Tuple", "String", "List"],
    "answerIndex": 3,
    "explanation": "Lists are unhashable and cannot be set elements; tuples, ints, strings can be."
  },
  {
    "id": 27,
    "category": "Generators",
    "question": "What does the 'yield' keyword create inside a function?",
    "options": ["A list", "A generator", "A dictionary", "A class"],
    "answerIndex": 1,
    "explanation": "'yield' turns a function into a generator that yields values lazily."
  },
  {
    "id": 28,
    "category": "Decorators",
    "question": "What is the main purpose of a decorator in Python?",
    "options": ["Define a class", "Wrap and modify behaviour of functions", "Create generators", "Handle exceptions"],
    "answerIndex": 1,
    "explanation": "Decorators wrap functions to add or change behaviour without altering the original function."
  },
  {
    "id": 29,
    "category": "Lambda",
    "question": "Which of these is a valid lambda that adds two numbers?",
    "options": ["lambda x,y: x+y", "lambda x,y => x+y", "def lambda x,y: x+y", "lambda(x,y) {x+y}"],
    "answerIndex": 0,
    "explanation": "Python lambda syntax is 'lambda args: expression'."
  },
  {
    "id": 30,
    "category": "Virtual Envs",
    "question": "What does a virtual environment do?",
    "options": ["Isolate project dependencies", "Increase CPU speed", "Compile Python to C", "Backup files automatically"],
    "answerIndex": 0,
    "explanation": "Virtual envs keep project-specific packages separate from system Python."
  },
  {
    "id": 31,
    "category": "uv Tool",
    "question": "Which uv command is recommended to enforce exact lock usage in CI?",
    "options": ["uv sync --frozen", "uv run --ci", "uv build --lock", "uv install --ci"],
    "answerIndex": 0,
    "explanation": "`uv sync --frozen` ensures the environment matches uv.lock and fails if not."
  },
  {
    "id": 32,
    "category": "APIs",
    "question": "What is an API key?",
    "options": ["A username", "A password for programs to authenticate to an API", "A URL", "A file type"],
    "answerIndex": 1,
    "explanation": "API keys authenticate programmatic access to services."
  },
  {
    "id": 33,
    "category": "HTTP",
    "question": "Which HTTP status code indicates authentication is required or failed?",
    "options": ["200", "401", "404", "500"],
    "answerIndex": 1,
    "explanation": "401 Unauthorized means authentication is missing or invalid."
  },
  {
    "id": 34,
    "category": "OpenAI APIs",
    "question": "Which OpenAI API is typically used to create embeddings for text similarity?",
    "options": ["Chat Completions", "Responses", "Embeddings", "Audio"],
    "answerIndex": 2,
    "explanation": "Embeddings API produces vector representations for text similarity tasks."
  },
  {
    "id": 35,
    "category": "Chat Completions",
    "question": "In Chat Completions requests, which parameter contains the conversation history?",
    "options": ["context", "messages", "history", "conversation_id"],
    "answerIndex": 1,
    "explanation": "The messages array holds role-tagged history for Chat Completions."
  },
  {
    "id": 36,
    "category": "Responses API",
    "question": "Which field lets you follow up on a Responses API call without resending history?",
    "options": ["session_id", "previous_response_id", "conversation", "followup_token"],
    "answerIndex": 1,
    "explanation": "previous_response_id links a new call to stored server-side state."
  },
  {
    "id": 37,
    "category": "Agentic AI",
    "question": "Which best describes a Tool in Agents SDK?",
    "options": ["An AI that reasons", "An external helper (calculator, search)", "A user interface", "A database schema"],
    "answerIndex": 1,
    "explanation": "Tools are external capabilities an agent can call to perform actions."
  },
  {
    "id": 38,
    "category": "Guardrails",
    "question": "What is the purpose of guardrails in agent workflows?",
    "options": ["Speed up execution", "Enforce safety and validate outputs", "Replace the Runner", "Create agents automatically"],
    "answerIndex": 1,
    "explanation": "Guardrails check inputs/outputs and prevent unsafe or invalid behavior."
  },
  {
    "id": 39,
    "category": "Design Patterns",
    "question": "Which pattern breaks a complex task into a sequence of smaller, dependent steps?",
    "options": ["Prompt Chaining", "Parallelization", "Routing", "Orchestrator-Workers"],
    "answerIndex": 0,
    "explanation": "Prompt Chaining divides a task into ordered steps where each uses the previous output."
  },
  {
    "id": 40,
    "category": "Design Patterns",
    "question": "Which pattern routes tasks to the most suitable agent?",
    "options": ["Prompt Chaining", "Routing", "Parallelization", "Evaluator-Optimizer"],
    "answerIndex": 1,
    "explanation": "Routing directs requests to the agent best suited for the job."
  },
  {
    "id": 41,
    "category": "Design Patterns",
    "question": "Which pattern executes multiple subtasks at the same time to save time?",
    "options": ["Routing", "Prompt Chaining", "Parallelization", "Guardrails"],
    "answerIndex": 2,
    "explanation": "Parallelization runs tasks concurrently for efficiency."
  },
  {
    "id": 42,
    "category": "Design Patterns",
    "question": "What is the Orchestrator-Workers pattern?",
    "options": ["A single agent doing everything", "One agent splits tasks and assigns to worker agents", "A pattern for caching", "A testing method"],
    "answerIndex": 1,
    "explanation": "An orchestrator decomposes a task and delegates to worker agents."
  },
  {
    "id": 43,
    "category": "Design Patterns",
    "question": "What does the Evaluator-Optimizer pattern do?",
    "options": ["Routes tasks", "Runs tasks in parallel", "Evaluates outputs and suggests improvements", "Stores session state"],
    "answerIndex": 2,
    "explanation": "An evaluator inspects results and an optimizer refines behavior iteratively."
  },
  {
    "id": 44,
    "category": "Testing",
    "question": "Which command ensures tests run with the exact locked dependency set in uv?",
    "options": ["uv run pytest", "pip install -r requirements.txt", "python -m unittest", "uv test run"],
    "answerIndex": 0,
    "explanation": "`uv run pytest` runs tests inside the project's locked environment."
  },
  {
    "id": 45,
    "category": "CI",
    "question": "Which uv command should be used in CI to enforce exact dependencies?",
    "options": ["uv sync --frozen", "uv install --ci", "uv run --frozen", "uv lock --check"],
    "answerIndex": 0,
    "explanation": "`uv sync --frozen` ensures CI uses the versions in uv.lock and fails otherwise."
  },
  {
    "id": 46,
    "category": "File I/O",
    "question": "What is the benefit of using 'with open(...) as f:' in Python?",
    "options": ["Faster I/O", "Automatic resource cleanup (file closed)", "Encrypts the file", "Runs asynchronously"],
    "answerIndex": 1,
    "explanation": "'with' ensures the file is closed automatically even on errors."
  },
  {
    "id": 47,
    "category": "JSON",
    "question": "What does json.dumps(obj) return?",
    "options": ["A Python dict", "A JSON-formatted string", "A file handle", "A bytes object always"],
    "answerIndex": 1,
    "explanation": "json.dumps serializes a Python object to a JSON string."
  },
  {
    "id": 48,
    "category": "Strings",
    "question": "What does 'a b c'.split() return?",
    "options": ["'a b c'", "['a','b','c']", "('a','b','c')", "Error"],
    "answerIndex": 1,
    "explanation": "split() splits on whitespace returning a list of substrings."
  },
  {
    "id": 49,
    "category": "Dictionaries",
    "question": "What does dict.get('key', default) do when 'key' is missing?",
    "options": ["Raises KeyError", "Returns default value", "Deletes the dict", "Returns None only if default omitted"],
    "answerIndex": 1,
    "explanation": "dict.get returns the default if the key is not present (or None if default omitted)."
  },
  {
    "id": 50,
    "category": "Comprehensions",
    "question": "What type is produced by (x for x in range(3)) ?",
    "options": ["list", "tuple", "generator", "set"],
    "answerIndex": 2,
    "explanation": "Parentheses with an expression create a generator expression (a generator object)."
  },
  {
    "id": 51,
    "category": "Python Basics",
    "question": "What is the symbol for single-line comments in Python?",
    "options": ["//", "#", "/* */", "<!-- -->"],
    "answerIndex": 1,
    "explanation": "Python uses `#` for single-line comments."
  },
  {
    "id": 52,
    "category": "Python Basics",
    "question": "Which function converts a string into an integer in Python?",
    "options": ["parseInt()", "int()", "str()", "float()"],
    "answerIndex": 1,
    "explanation": "The `int()` function converts strings to integers."
  },
  {
    "id": 53,
    "category": "Control Flow",
    "question": "What is the output of: `print(True and False)`?",
    "options": ["True", "False", "None", "Error"],
    "answerIndex": 1,
    "explanation": "True AND False evaluates to False."
  },
  {
    "id": 54,
    "category": "Data Structures",
    "question": "Which method adds an item to the end of a Python list?",
    "options": ["append()", "add()", "insert()", "push()"],
    "answerIndex": 0,
    "explanation": "The `append()` method adds an element at the end of a list."
  },
  {
    "id": 55,
    "category": "Data Structures",
    "question": "Which collection does not allow duplicate elements?",
    "options": ["List", "Tuple", "Set", "Dictionary"],
    "answerIndex": 2,
    "explanation": "Sets in Python cannot contain duplicates."
  },
  {
    "id": 56,
    "category": "Functions",
    "question": "Which keyword is used to pass a variable number of arguments into a function?",
    "options": ["args", "*", "**", "var"],
    "answerIndex": 1,
    "explanation": "`*args` lets you pass variable numbers of positional arguments."
  },
  {
    "id": 57,
    "category": "Functions",
    "question": "What does `return` do in a Python function?",
    "options": ["Prints a value", "Exits the program", "Sends a value back to the caller", "Defines a variable"],
    "answerIndex": 2,
    "explanation": "`return` sends a value from the function back to its caller."
  },
  {
    "id": 58,
    "category": "uv Tool",
    "question": "Which uv command initializes a new project?",
    "options": ["uv new", "uv init", "uv create", "uv start"],
    "answerIndex": 1,
    "explanation": "`uv init` scaffolds a new Python project."
  },
  {
    "id": 59,
    "category": "uv Tool",
    "question": "What is the command to pin Python version 3.12 in uv?",
    "options": ["uv python use 3.12", "uv python pin 3.12", "uv set python=3.12", "uv install 3.12"],
    "answerIndex": 1,
    "explanation": "`uv python pin 3.12` ensures reproducibility by fixing the version."
  },
  {
    "id": 60,
    "category": "uv Tool",
    "question": "Which file locks exact package versions in uv?",
    "options": ["pyproject.toml", "requirements.txt", "uv.lock", "Pipfile.lock"],
    "answerIndex": 2,
    "explanation": "`uv.lock` records resolved package versions."
  },
  {
    "id": 61,
    "category": "APIs",
    "question": "Which HTTP method is typically used to send new data to a server?",
    "options": ["GET", "POST", "PUT", "DELETE"],
    "answerIndex": 1,
    "explanation": "`POST` is used to send new data to a server."
  },
  {
    "id": 62,
    "category": "APIs",
    "question": "In APIs, what does JSON usually represent?",
    "options": ["A markup language", "A binary format", "A lightweight data-interchange format", "An image format"],
    "answerIndex": 2,
    "explanation": "JSON is a text format for exchanging structured data."
  },
  {
    "id": 63,
    "category": "APIs",
    "question": "Which of these is an example of a REST API endpoint?",
    "options": ["/getUserData", "/api/v1/users", "http://example.com", "database.table"],
    "answerIndex": 1,
    "explanation": "REST endpoints often use paths like `/api/v1/users`."
  },
  {
    "id": 64,
    "category": "Agentic AI",
    "question": "In Agents SDK, what is a Runner?",
    "options": ["A tool", "A debugging method", "The execution engine for agents", "A data type"],
    "answerIndex": 2,
    "explanation": "Runner executes and manages the lifecycle of agents."
  },
  {
    "id": 65,
    "category": "Agentic AI",
    "question": "What does tracing help with in Agents SDK?",
    "options": ["Improving performance", "Debugging and visualizing agent execution", "Encrypting data", "Faster training"],
    "answerIndex": 1,
    "explanation": "Tracing allows developers to debug and see how agents executed."
  },
  {
    "id": 66,
    "category": "Python Basics",
    "question": "What does the `len()` function return?",
    "options": ["The maximum value", "The number of items", "The last element", "The type of the object"],
    "answerIndex": 1,
    "explanation": "`len()` returns the number of elements in an object."
  },
  {
    "id": 67,
    "category": "Python Basics",
    "question": "Which operator is used for exponentiation in Python?",
    "options": ["^", "**", "exp()", "//"],
    "answerIndex": 1,
    "explanation": "`**` is used for exponentiation (e.g., 2**3 = 8)."
  },
  {
    "id": 68,
    "category": "Control Flow",
    "question": "Which keyword starts a loop in Python?",
    "options": ["for", "loop", "iterate", "repeat"],
    "answerIndex": 0,
    "explanation": "`for` is used to start a loop in Python."
  },
  {
    "id": 69,
    "category": "Control Flow",
    "question": "What does `break` do inside a loop?",
    "options": ["Skips one iteration", "Ends the loop immediately", "Pauses the loop", "Restarts the loop"],
    "answerIndex": 1,
    "explanation": "`break` terminates the loop instantly."
  },
  {
    "id": 70,
    "category": "Data Structures",
    "question": "What will `set([1,2,2,3])` return?",
    "options": ["[1,2,2,3]", "{1,2,3}", "(1,2,3)", "Error"],
    "answerIndex": 1,
    "explanation": "Sets remove duplicates, so result is {1,2,3}."
  },
  {
    "id": 71,
    "category": "Data Structures",
    "question": "Which dictionary method returns all keys?",
    "options": ["keys()", "values()", "items()", "get()"],
    "answerIndex": 0,
    "explanation": "`keys()` returns a view of dictionary keys."
  },
  {
    "id": 72,
    "category": "Functions",
    "question": "What does `lambda` define in Python?",
    "options": ["A loop", "An anonymous function", "A class", "A variable"],
    "answerIndex": 1,
    "explanation": "`lambda` creates a small anonymous function."
  },
  {
    "id": 73,
    "category": "Functions",
    "question": "Which statement is true about Python functions?",
    "options": ["They cannot return multiple values", "They can return multiple values as tuples", "They must return integers only", "They cannot take arguments"],
    "answerIndex": 1,
    "explanation": "Functions can return multiple values, packed in a tuple."
  },
  {
    "id": 74,
    "category": "uv Tool",
    "question": "What command installs a runtime dependency in uv?",
    "options": ["uv get", "uv add", "uv install", "uv put"],
    "answerIndex": 1,
    "explanation": "`uv add package_name` installs a dependency."
  },
  {
    "id": 75,
    "category": "uv Tool",
    "question": "How do you run code without activating the venv in uv?",
    "options": ["uv exec", "uv run", "uv code", "uv start"],
    "answerIndex": 1,
    "explanation": "`uv run` runs commands in the correct environment."
  },
  {
    "id": 76,
    "category": "uv Tool",
    "question": "Which command ensures the environment matches uv.lock exactly?",
    "options": ["uv check", "uv sync", "uv rebuild", "uv update"],
    "answerIndex": 1,
    "explanation": "`uv sync` aligns the environment with uv.lock."
  },
  {
    "id": 77,
    "category": "APIs",
    "question": "What does 'stateless' mean in APIs?",
    "options": ["The server remembers user data", "Each request is independent", "Data is always stored in cookies", "The API requires authentication"],
    "answerIndex": 1,
    "explanation": "Stateless = server does not store client state between requests."
  },
  {
    "id": 78,
    "category": "APIs",
    "question": "Which OpenAI API stores memory of past inputs?",
    "options": ["Chat Completions", "Responses API", "Embeddings API", "Moderation API"],
    "answerIndex": 1,
    "explanation": "Responses API can remember past inputs (stateful)."
  },
  {
    "id": 79,
    "category": "APIs",
    "question": "What format is usually used to send/receive data in web APIs?",
    "options": ["HTML", "XML", "JSON", "TXT"],
    "answerIndex": 2,
    "explanation": "Most APIs use JSON for structured data exchange."
  },
  {
    "id": 80,
    "category": "Agentic AI",
    "question": "Which Anthropic pattern breaks complex tasks into smaller steps?",
    "options": ["Routing", "Parallelization", "Prompt Chaining", "Evaluator-Optimizer"],
    "answerIndex": 2,
    "explanation": "Prompt chaining divides tasks into sequential smaller steps."
  },
  {
    "id": 81,
    "category": "Agentic AI",
    "question": "Which pattern assigns subtasks from an orchestrator to worker agents?",
    "options": ["Evaluator-Optimizer", "Orchestrator-Workers", "Routing", "Chaining"],
    "answerIndex": 1,
    "explanation": "Orchestrator-Workers involves delegation of subtasks."
  },
  {
    "id": 82,
    "category": "Agentic AI",
    "question": "Which pattern uses feedback loops for continuous improvement?",
    "options": ["Evaluator-Optimizer", "Routing", "Parallelization", "Prompt chaining"],
    "answerIndex": 0,
    "explanation": "Evaluator-Optimizer assesses and improves performance iteratively."
  },
  {
    "id": 83,
    "category": "Python Basics",
    "question": "Which keyword defines a class in Python?",
    "options": ["def", "class", "struct", "type"],
    "answerIndex": 1,
    "explanation": "Python uses `class` to define classes."
  },
  {
    "id": 84,
    "category": "Python Basics",
    "question": "What will `print(type(3.0))` output?",
    "options": ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'decimal'>"],
    "answerIndex": 1,
    "explanation": "3.0 is a float."
  },
  {
    "id": 85,
    "category": "Data Structures",
    "question": "Which is true about tuples?",
    "options": ["They are immutable", "They are mutable", "They allow item reassignment", "They can only store numbers"],
    "answerIndex": 0,
    "explanation": "Tuples are immutable sequences."
  },
  {
    "id": 86,
    "category": "Data Structures",
    "question": "Which method removes an item by key from a dictionary?",
    "options": ["pop()", "remove()", "discard()", "delkey()"],
    "answerIndex": 0,
    "explanation": "`dict.pop(key)` removes the entry with that key."
  },
  {
    "id": 87,
    "category": "Functions",
    "question": "What is a docstring in Python?",
    "options": ["A type of string", "A comment block inside a function/class/module", "A special variable", "An error message"],
    "answerIndex": 1,
    "explanation": "Docstrings describe functions/classes/modules with triple quotes."
  },
  {
    "id": 88,
    "category": "Functions",
    "question": "Which keyword is used to handle exceptions?",
    "options": ["try", "handle", "catch", "except"],
    "answerIndex": 3,
    "explanation": "Exceptions are caught with try/except blocks."
  },
  {
    "id": 89,
    "category": "uv Tool",
    "question": "Which uv command updates dependencies?",
    "options": ["uv update", "uv upgrade", "uv refresh", "uv patch"],
    "answerIndex": 1,
    "explanation": "`uv upgrade` updates dependencies in a controlled way."
  },
  {
    "id": 90,
    "category": "uv Tool",
    "question": "Which uv command publishes to PyPI?",
    "options": ["uv share", "uv upload", "uv publish", "uv push"],
    "answerIndex": 2,
    "explanation": "`uv publish` uploads your package to PyPI."
  },
  {
    "id": 91,
    "category": "APIs",
    "question": "Which status code usually indicates a successful API request?",
    "options": ["200", "404", "500", "302"],
    "answerIndex": 0,
    "explanation": "200 means OK / success."
  },
  {
    "id": 92,
    "category": "APIs",
    "question": "Which tool is commonly used to test APIs interactively?",
    "options": ["Jupyter", "Postman", "TensorFlow", "VS Code"],
    "answerIndex": 1,
    "explanation": "Postman is widely used for API testing."
  },
  {
    "id": 93,
    "category": "Agentic AI",
    "question": "Which component validates input/output in Agents SDK?",
    "options": ["Guardrail", "Runner", "Handoff", "Tracer"],
    "answerIndex": 0,
    "explanation": "Guardrails filter and validate data."
  },
  {
    "id": 94,
    "category": "Agentic AI",
    "question": "What is parallelization in multi-agent systems?",
    "options": ["Running agents sequentially", "Running multiple subtasks at the same time", "Blocking agents until others finish", "Using only one agent"],
    "answerIndex": 1,
    "explanation": "Parallelization allows concurrent execution of subtasks."
  },
  {
    "id": 95,
    "category": "Python Basics",
    "question": "What is the result of `3//2`?",
    "options": ["1", "1.5", "2", "Error"],
    "answerIndex": 0,
    "explanation": "`//` is floor division. 3//2 = 1."
  },
  {
    "id": 96,
    "category": "Python Basics",
    "question": "Which function shows help documentation in Python?",
    "options": ["info()", "help()", "doc()", "man()"],
    "answerIndex": 1,
    "explanation": "`help(object)` displays documentation."
  },
  {
    "id": 97,
    "category": "Control Flow",
    "question": "What is the output of `bool(0)`?",
    "options": ["True", "False", "0", "Error"],
    "answerIndex": 1,
    "explanation": "0 evaluates to False in Boolean context."
  },
  {
    "id": 98,
    "category": "Control Flow",
    "question": "Which loop ensures execution at least once?",
    "options": ["while", "for", "do-while (not native in Python)", "None"],
    "answerIndex": 2,
    "explanation": "Python lacks do-while, but conceptually do-while ensures at least once."
  },
  {
    "id": 99,
    "category": "Data Structures",
    "question": "Which is the correct way to create an empty dictionary?",
    "options": ["[]", "()", "{}", "dict[]"],
    "answerIndex": 2,
    "explanation": "Empty dictionary is `{}`."
  },
  {
    "id": 100,
    "category": "Data Structures",
    "question": "What is returned by `list('abc')`?",
    "options": ["['abc']", "['a','b','c']", "('a','b','c')", "{'a','b','c'}"],
    "answerIndex": 1,
    "explanation": "The string splits into a list of its characters."
},

  {
    "id": 101,
    "category": "Swarm vs Agents SDK",
    "question": "Which of the following was the lightweight experimental framework before the Agents SDK?",
    "options": ["LangChain", "uv", "Swarm", "FastAPI"],
    "answerIndex": 2,
    "explanation": "Swarm was the older, lightweight experimental framework that led to the production-ready Agents SDK."
  },
  {
    "id": 102,
    "category": "Swarm vs Agents SDK",
    "question": "Which feature is added in the Agents SDK compared to Swarm?",
    "options": ["Tool calling", "Handoffs", "Orchestration and scalability", "None of these"],
    "answerIndex": 2,
    "explanation": "Agents SDK introduced stronger orchestration, context sharing, and scalability beyond Swarm."
  },
  {
    "id": 103,
    "category": "Anthropic Patterns",
    "question": "What does 'Prompt Chaining' mean in agent design?",
    "options": ["Breaking big tasks into smaller sequential steps", "Running all subtasks at once", "Sending tasks to the right agent", "Evaluating agent performance"],
    "answerIndex": 0,
    "explanation": "Prompt Chaining means splitting a big task into smaller steps done one after another."
  },
  {
    "id": 104,
    "category": "Anthropic Patterns",
    "question": "Which Anthropic pattern assigns tasks to the most relevant specialist agent?",
    "options": ["Parallelization", "Routing", "Evaluator-Optimizer", "Prompt Chaining"],
    "answerIndex": 1,
    "explanation": "Routing sends tasks to the right agent for efficiency."
  },
  {
    "id": 105,
    "category": "Anthropic Patterns",
    "question": "Which pattern allows multiple agents to perform subtasks at the same time?",
    "options": ["Routing", "Parallelization", "Evaluator-Optimizer", "Prompt Chaining"],
    "answerIndex": 1,
    "explanation": "Parallelization runs multiple subtasks simultaneously."
  },
  {
    "id": 106,
    "category": "Anthropic Patterns",
    "question": "In the Orchestrator-Workers pattern, what is the role of the orchestrator agent?",
    "options": ["Checking results", "Breaking work into smaller tasks", "Running tools", "Answering directly"],
    "answerIndex": 1,
    "explanation": "The orchestrator splits work and assigns it to worker agents."
  },
  {
    "id": 107,
    "category": "Anthropic Patterns",
    "question": "Which pattern uses one agent to review and suggest improvements to others’ work?",
    "options": ["Routing", "Evaluator-Optimizer", "Orchestrator-Workers", "Prompt Chaining"],
    "answerIndex": 1,
    "explanation": "Evaluator-Optimizer reviews and improves the quality of output."
  },
  {
    "id": 108,
    "category": "uv",
    "question": "Which file in uv declares what dependencies you want?",
    "options": ["requirements.txt", "pyproject.toml", "uv.lock", "setup.py"],
    "answerIndex": 1,
    "explanation": "pyproject.toml contains declared requirements, while uv.lock stores exact installed versions."
  },
  {
    "id": 109,
    "category": "uv",
    "question": "Which file in uv records the exact dependency versions to ensure reproducibility?",
    "options": ["requirements.txt", "pyproject.toml", "uv.lock", "setup.py"],
    "answerIndex": 2,
    "explanation": "uv.lock ensures everyone has the same installed versions."
  },
  {
    "id": 110,
    "category": "uv",
    "question": "Which command initializes a new uv project?",
    "options": ["uv init", "uv start", "uv new", "uv project"],
    "answerIndex": 0,
    "explanation": "uv init creates the project and pyproject.toml file."
  },
  {
    "id": 111,
    "category": "uv",
    "question": "Which command installs a dependency with uv?",
    "options": ["pip install", "uv install", "uv add", "uv get"],
    "answerIndex": 2,
    "explanation": "uv add installs a new dependency and updates pyproject.toml and uv.lock."
  },
  {
    "id": 112,
    "category": "uv",
    "question": "Which of the following is a common mistake beginners make in uv?",
    "options": ["Forgetting to commit uv.lock", "Using uv add", "Pinning Python version", "Running uv run"],
    "answerIndex": 0,
    "explanation": "Forgetting to commit uv.lock causes inconsistencies across environments."
  },
  {
    "id": 113,
    "category": "uv",
    "question": "Which uv command pins a Python version?",
    "options": ["uv python use", "uv python pin", "uv pin", "uv set"],
    "answerIndex": 1,
    "explanation": "uv python pin <version> locks the project to a specific Python version."
  },
  {
    "id": 114,
    "category": "uv",
    "question": "What type of project is best suited for quick experiments in uv?",
    "options": ["Packaged application", "Simple application", "Library", "Published package"],
    "answerIndex": 1,
    "explanation": "Simple applications are for quick internal experiments or scripts."
  },
  {
    "id": 115,
    "category": "uv",
    "question": "What type of project in uv includes versioning and entry points?",
    "options": ["Simple application", "Packaged application", "Scratch project", "Library only"],
    "answerIndex": 1,
    "explanation": "Packaged applications include proper versioning and entry points."
  },
  {
    "id": 116,
    "category": "APIs",
    "question": "In the restaurant analogy, what does the API represent?",
    "options": ["The chef", "The waiter", "The customer", "The kitchen"],
    "answerIndex": 1,
    "explanation": "The API is like the waiter, passing your order to the server and bringing results."
  },
  {
    "id": 117,
    "category": "APIs",
    "question": "Which of the following is NOT an example of an API?",
    "options": ["Weather API", "Payment API", "Uber API", "Textbook"],
    "answerIndex": 3,
    "explanation": "A textbook is not an API. APIs connect software systems."
  },
  {
    "id": 118,
    "category": "APIs",
    "question": "Which HTTP method is usually used to request data from an API?",
    "options": ["POST", "PUT", "GET", "DELETE"],
    "answerIndex": 2,
    "explanation": "GET is the standard method to request data from an API."
  },
  {
    "id": 119,
    "category": "APIs",
    "question": "Which OpenAI API is stateless and requires resending the full conversation each time?",
    "options": ["Responses API", "Chat Completions API", "Tools API", "Memory API"],
    "answerIndex": 1,
    "explanation": "Chat Completions API is stateless and needs full history in each request."
  },
  {
    "id": 120,
    "category": "APIs",
    "question": "Which OpenAI API remembers previous conversations automatically?",
    "options": ["Responses API", "Chat Completions API", "Stateless API", "Context API"],
    "answerIndex": 0,
    "explanation": "The Responses API is stateful and includes memory."
  },
  {
    "id": 121,
    "category": "APIs",
    "question": "In the Chat Completions API, what must be included in every request?",
    "options": ["Only the last user message", "Conversation history", "API key only", "System instructions only"],
    "answerIndex": 1,
    "explanation": "The Chat Completions API is stateless, so you must resend the full conversation history each time."
  },
  {
    "id": 122,
    "category": "APIs",
    "question": "Which OpenAI API is best for assistants that need built-in tools and memory?",
    "options": ["Chat Completions API", "Responses API", "Stateless API", "Tool API"],
    "answerIndex": 1,
    "explanation": "The Responses API is stateful and supports built-in tools."
  },
  {
    "id": 123,
    "category": "APIs",
    "question": "Which tool helps you test and send API requests easily?",
    "options": ["Jupyter Notebook", "Postman", "Docker", "GitHub"],
    "answerIndex": 1,
    "explanation": "Postman is commonly used to test and send API requests."
  },
  {
    "id": 124,
    "category": "API Keys",
    "question": "What is the purpose of an API key?",
    "options": ["To encrypt messages", "To authenticate and allow API access", "To manage servers", "To debug code"],
    "answerIndex": 1,
    "explanation": "An API key acts like a secret password that authenticates your access to the API."
  },
  {
    "id": 125,
    "category": "API Keys",
    "question": "Where can you create a new OpenAI API key?",
    "options": ["OpenAI Docs", "platform.openai.com/api-keys", "Postman", "uv project"],
    "answerIndex": 1,
    "explanation": "New API keys are generated in the OpenAI platform under the API Keys section."
  },
  {
    "id": 126,
    "category": "API Keys",
    "question": "Where can you create a new Google Gemini API key?",
    "options": ["Google Drive", "Google AI Studio", "Google Maps Console", "Firebase"],
    "answerIndex": 1,
    "explanation": "Gemini API keys are created in Google AI Studio."
  },
  {
    "id": 127,
    "category": "API Keys",
    "question": "Which of the following is a security best practice for API keys?",
    "options": ["Share in public repos", "Embed directly in code", "Use environment variables", "Post on social media"],
    "answerIndex": 2,
    "explanation": "API keys should be stored in environment variables, not exposed in code."
  },
  {
    "id": 128,
    "category": "API Keys",
    "question": "What happens if you forget to keep your API key secret?",
    "options": ["Nothing happens", "Free usage increases", "Unauthorized users can access your account", "Your key auto-expires"],
    "answerIndex": 2,
    "explanation": "If leaked, others could use your key and potentially incur charges."
  },
  {
    "id": 129,
    "category": "API Keys",
    "question": "Which file type is often used to safely store API keys in Python projects?",
    "options": [".env", ".txt", "README.md", "LICENSE"],
    "answerIndex": 0,
    "explanation": ".env files are commonly used to store API keys safely."
  },
  {
    "id": 130,
    "category": "Agents SDK",
    "question": "What is an Agent in the OpenAI Agents SDK?",
    "options": ["A Python package", "A smart AI worker with instructions", "A debugging tool", "A server process"],
    "answerIndex": 1,
    "explanation": "An agent is like a smart AI worker that follows instructions and performs tasks."
  },
  {
    "id": 131,
    "category": "Agents SDK",
    "question": "What is a Tool in the Agents SDK?",
    "options": ["A system prompt", "An external helper function or API", "A debugging feature", "A code formatter"],
    "answerIndex": 1,
    "explanation": "A tool is an external helper (like a calculator or API) that the agent can use."
  },
  {
    "id": 132,
    "category": "Agents SDK",
    "question": "What does a Handoff do in the Agents SDK?",
    "options": ["Switches programming languages", "Passes a task to another agent", "Stops execution", "Changes API keys"],
    "answerIndex": 1,
    "explanation": "Handoffs pass tasks from one agent to another specialized agent."
  },
  {
    "id": 133,
    "category": "Agents SDK",
    "question": "What is a Guardrail in the Agents SDK?",
    "options": ["A security checkpoint to block unsafe input", "A new tool type", "An orchestration method", "A logging system"],
    "answerIndex": 0,
    "explanation": "Guardrails block unwanted or unsafe input before it reaches the agent."
  },
  {
    "id": 134,
    "category": "Agents SDK",
    "question": "What is the Runner in the Agents SDK?",
    "options": ["The main LLM model", "The engine that executes the agent’s logic", "A visualization tool", "An external API"],
    "answerIndex": 1,
    "explanation": "The Runner is responsible for executing agent logic."
  },
  {
    "id": 135,
    "category": "Agents SDK",
    "question": "In the school analogy, what represents Guardrails?",
    "options": ["Teachers", "Receptionist", "Discipline rules", "Calculator"],
    "answerIndex": 2,
    "explanation": "Discipline rules represent Guardrails, filtering bad or inappropriate input."
  },
  {
    "id": 136,
    "category": "Agents SDK",
    "question": "In the school analogy, what represents Tools?",
    "options": ["Receptionist", "Teachers", "Calculator", "Principal"],
    "answerIndex": 2,
    "explanation": "The calculator represents tools that help agents perform tasks."
  },
  {
    "id": 137,
    "category": "Agents SDK",
    "question": "Which is NOT a benefit of using the Agents SDK?",
    "options": ["Tracing and debugging", "Orchestration of tasks", "Ability to scale with multiple agents", "Automatic hardware installation"],
    "answerIndex": 3,
    "explanation": "The SDK does not handle hardware installation; it focuses on orchestration, tools, and tracing."
  },
  {
    "id": 138,
    "category": "Agents SDK",
    "question": "Which command is needed to install the Agents SDK with uv?",
    "options": ["uv add agents", "uv add openai-agents", "uv install agents", "uv get agents"],
    "answerIndex": 1,
    "explanation": "uv add openai-agents installs the Agents SDK."
  },
  {
    "id": 139,
    "category": "Agents SDK",
    "question": "Which Python function runs an agent synchronously in the SDK?",
    "options": ["Runner.run()", "Runner.run_sync()", "Runner.execute()", "Agent.run()"],
    "answerIndex": 1,
    "explanation": "Runner.run_sync(agent, input) runs an agent synchronously."
  },
  {
    "id": 140,
    "category": "Agents SDK",
    "question": "What is the primary advantage of tracing in the Agents SDK?",
    "options": ["It speeds up code execution", "It shows step-by-step what each agent did", "It changes the agent’s model", "It stores API keys"],
    "answerIndex": 1,
    "explanation": "Tracing helps debug by showing step-by-step what happened in an agent’s execution."
  },
   {
    "id": 141,
    "category": "Model Configuration",
    "question": "Which configuration level applies only to a single agent?",
    "options": ["Global Level", "Run Level", "Agent Level", "System Level"],
    "answerIndex": 2,
    "explanation": "Agent Level configuration applies only to one specific agent."
  },
  {
    "id": 142,
    "category": "Model Configuration",
    "question": "Which configuration level affects all agents in one execution run?",
    "options": ["Agent Level", "Run Level", "Global Level", "Default Level"],
    "answerIndex": 1,
    "explanation": "Run Level applies settings to all agents during a single execution."
  },
  {
    "id": 143,
    "category": "Model Configuration",
    "question": "Which configuration level sets defaults for the entire app?",
    "options": ["Agent Level", "Run Level", "Global Level", "System Level"],
    "answerIndex": 2,
    "explanation": "Global Level defines defaults for the entire application."
  },
  {
    "id": 144,
    "category": "Model Configuration",
    "question": "What is the priority order of configuration in the Agents SDK?",
    "options": ["Global > Run > Agent", "Run > Global > Agent", "Agent > Run > Global", "Global > Agent > Run"],
    "answerIndex": 2,
    "explanation": "Agent Level overrides Run Level, and Run Level overrides Global Level."
  },
  {
    "id": 145,
    "category": "Model Configuration",
    "question": "Why might you configure different models per agent?",
    "options": ["To save disk space", "Because agents need specialized strengths", "To avoid API keys", "To use fewer tools"],
    "answerIndex": 1,
    "explanation": "Different models are chosen for creativity, reasoning, or efficiency per agent."
  },
  {
    "id": 146,
    "category": "Tools",
    "question": "What is a Tool in AI?",
    "options": ["A debugging script", "An external helper function or API", "A memory system", "A system instruction"],
    "answerIndex": 1,
    "explanation": "A tool is an external helper such as a calculator or API."
  },
  {
    "id": 147,
    "category": "Tools",
    "question": "What is Tool Calling?",
    "options": ["Manually running tools", "The AI choosing to use a tool while solving a task", "Debugging agent steps", "Changing API keys"],
    "answerIndex": 1,
    "explanation": "Tool calling means the AI decides to invoke a tool during task execution."
  },
  {
    "id": 148,
    "category": "Tools",
    "question": "Which of the following is NOT a typical AI tool?",
    "options": ["Calculator", "Weather API", "Database connector", "System fan controller"],
    "answerIndex": 3,
    "explanation": "System fan controllers are not typical AI tools."
  },
  {
    "id": 149,
    "category": "Tools",
    "question": "Why are tools needed in AI?",
    "options": ["To decorate responses", "To fetch live data or perform precise actions", "To reduce tokens", "To change the model"],
    "answerIndex": 1,
    "explanation": "Tools provide live data, precision, and real-world actions."
  },
  {
    "id": 150,
    "category": "Tools",
    "question": "Which tool type is best for looking up facts?",
    "options": ["Calculator", "Search", "Email sender", "Database"],
    "answerIndex": 1,
    "explanation": "Search tools fetch live or external factual data."
  },
  {
    "id": 151,
    "category": "Tools",
    "question": "What is the correct order of a tool call?",
    "options": ["Tool → AI → User → Result", "User → AI → Tool → Result → AI → User", "AI → User → Tool → Result", "User → Tool → AI → Result"],
    "answerIndex": 1,
    "explanation": "The flow is User input → AI decides → Tool called → Tool result → AI response to User."
  },
  {
    "id": 152,
    "category": "Tools",
    "question": "In the classroom demo, which tools are used for the query '19×23 and weather in Karachi'?",
    "options": ["Calculator only", "Weather only", "Calculator and Weather", "Search only"],
    "answerIndex": 2,
    "explanation": "The agent calls both calculator and weather tools to answer the query."
  },
  {
    "id": 153,
    "category": "Tools",
    "question": "Which of the following is a good habit when building tools?",
    "options": ["Make one tool do multiple jobs", "Use unclear names", "Provide predictable outputs", "Expose API keys"],
    "answerIndex": 2,
    "explanation": "Tools should do one job well and return predictable outputs."
  },
  {
    "id": 154,
    "category": "Tools",
    "question": "Which analogy best describes tool use?",
    "options": ["Teacher with chalkboard", "Chef using a blender when needed", "Driver using the horn", "Student reading a book"],
    "answerIndex": 1,
    "explanation": "Like a chef using a blender only when required, AI uses tools only when needed."
  },
  {
    "id": 155,
    "category": "Model Settings",
    "question": "Which model setting controls creativity vs precision?",
    "options": ["max_tokens", "temperature", "tool_choice", "verbosity"],
    "answerIndex": 1,
    "explanation": "Temperature controls creativity (high) vs precision (low)."
  },
  {
    "id": 156,
    "category": "Model Settings",
    "question": "What does the setting max_tokens control?",
    "options": ["Response creativity", "Response length", "Response safety", "Tool selection"],
    "answerIndex": 1,
    "explanation": "max_tokens limits the maximum number of tokens in a response."
  },
  {
    "id": 157,
    "category": "Model Settings",
    "question": "What does tool_choice='auto' mean?",
    "options": ["AI cannot use tools", "AI must always use tools", "AI decides when to use tools", "AI disables all tools"],
    "answerIndex": 2,
    "explanation": "With auto, the AI decides whether to use tools."
  },
  {
    "id": 158,
    "category": "Model Settings",
    "question": "What happens if parallel_tool_calls is set to True?",
    "options": ["Tools are blocked", "Only one tool is used", "Multiple tools can run simultaneously", "Only search tools are allowed"],
    "answerIndex": 2,
    "explanation": "parallel_tool_calls=True allows multiple tools to be used at the same time."
  },
  {
    "id": 159,
    "category": "Model Settings",
    "question": "Which setting can penalize repetition in responses?",
    "options": ["temperature", "top_p", "frequency_penalty", "tool_choice"],
    "answerIndex": 2,
    "explanation": "frequency_penalty reduces repetition by penalizing reused tokens."
  },
  {
    "id": 160,
    "category": "Model Settings",
    "question": "What does resolve() do when merging Model Settings?",
    "options": ["Deletes base settings", "Combines settings intelligently", "Overrides global config", "Stops model execution"],
    "answerIndex": 1,
    "explanation": "resolve() merges base and override settings intelligently."
  },
  {
    "id": 161,
    "category": "Model Settings",
    "question": "What is the effect of setting temperature to 0.1?",
    "options": ["Highly creative responses", "Precise and consistent responses", "Longer responses", "Tool usage disabled"],
    "answerIndex": 1,
    "explanation": "Low temperature (0.1) produces more precise and consistent answers."
  },
  {
    "id": 162,
    "category": "Model Settings",
    "question": "What is the effect of setting temperature to 0.9?",
    "options": ["Highly creative and varied responses", "Very short responses", "No tools allowed", "Precise but repetitive responses"],
    "answerIndex": 0,
    "explanation": "High temperature (0.9) encourages creativity and variety."
  },
  {
    "id": 163,
    "category": "Model Settings",
    "question": "Which setting limits the maximum response length?",
    "options": ["temperature", "frequency_penalty", "max_tokens", "top_p"],
    "answerIndex": 2,
    "explanation": "max_tokens defines how many tokens the model can generate."
  },
  {
    "id": 164,
    "category": "Model Settings",
    "question": "Which setting merges extra_args without replacing them?",
    "options": ["combine()", "resolve()", "append()", "merge_all()"],
    "answerIndex": 1,
    "explanation": "resolve() merges ModelSettings and extra_args intelligently."
  },
  {
    "id": 165,
    "category": "Context Management",
    "question": "Which context type is NOT visible to the LLM?",
    "options": ["Local Context", "Agent/LLM Context", "Conversation history", "System instructions"],
    "answerIndex": 0,
    "explanation": "Local Context is backend-only and invisible to the LLM."
  },
  {
    "id": 166,
    "category": "Context Management",
    "question": "Which context type is visible to the AI during responses?",
    "options": ["Local Context", "LLM Context", "Backend memory", "Python dataclass"],
    "answerIndex": 1,
    "explanation": "LLM Context includes conversation history and instructions visible to the AI."
  },
  {
    "id": 167,
    "category": "Context Management",
    "question": "Which of the following is an example of Local Context?",
    "options": ["User profile object", "System prompt", "Conversation history", "Search results"],
    "answerIndex": 0,
    "explanation": "Local Context holds backend-only data like user profile objects."
  },
  {
    "id": 168,
    "category": "Context Management",
    "question": "Which of the following is an example of Agent/LLM Context?",
    "options": ["Logger instance", "Database connection", "System instructions", "Helper function"],
    "answerIndex": 2,
    "explanation": "LLM Context includes system instructions that guide responses."
  },
  {
    "id": 169,
    "category": "Context Management",
    "question": "What Python feature is often used to define Local Context?",
    "options": ["class", "dict", "dataclass", "list"],
    "answerIndex": 2,
    "explanation": "Local Context is commonly defined using Python dataclasses."
  },
  {
    "id": 170,
    "category": "Context Management",
    "question": "Which context type do all tools in a single run share?",
    "options": ["Local Context", "LLM Context", "System instructions", "Agent memory"],
    "answerIndex": 0,
    "explanation": "All tools in the same run share the same Local Context object."
  },
  {
    "id": 171,
    "category": "Context Management",
    "question": "In the school analogy, which part is like Local Context?",
    "options": ["Private teacher notes", "Conversation history", "Principal’s speech", "Student questions"],
    "answerIndex": 0,
    "explanation": "Local Context is like private notes that only the backend sees."
  },
  {
    "id": 172,
    "category": "Dynamic Instructions",
    "question": "What are Dynamic Instructions?",
    "options": ["Fixed prompts for agents", "Instructions that change at runtime", "Static system messages", "API commands"],
    "answerIndex": 1,
    "explanation": "Dynamic Instructions adapt based on user, history, or external data."
  },
  {
    "id": 173,
    "category": "Dynamic Instructions",
    "question": "Which type of instructions stay the same regardless of context?",
    "options": ["Dynamic", "Static", "Time-based", "Stateful"],
    "answerIndex": 1,
    "explanation": "Static instructions do not change with user or situation."
  },
  {
    "id": 174,
    "category": "Dynamic Instructions",
    "question": "Which dynamic type adapts based on message count?",
    "options": ["Context-Aware", "Time-Based", "Stateful", "Async"],
    "answerIndex": 0,
    "explanation": "Context-Aware instructions change based on how many messages have been exchanged."
  },
  {
    "id": 175,
    "category": "Dynamic Instructions",
    "question": "Which dynamic type adapts based on the current hour?",
    "options": ["Context-Aware", "Time-Based", "Stateful", "Async"],
    "answerIndex": 1,
    "explanation": "Time-Based instructions adjust tone depending on the time of day."
  },
  {
    "id": 176,
    "category": "Dynamic Instructions",
    "question": "Which dynamic type remembers past interactions across runs?",
    "options": ["Context-Aware", "Time-Based", "Stateful", "Async"],
    "answerIndex": 2,
    "explanation": "Stateful instructions adapt based on previous sessions."
  },
  {
    "id": 177,
    "category": "Dynamic Instructions",
    "question": "Which dynamic type fetches external data asynchronously?",
    "options": ["Context-Aware", "Time-Based", "Stateful", "Async"],
    "answerIndex": 3,
    "explanation": "Async instructions fetch external or live data for adaptation."
  },
  {
    "id": 178,
    "category": "Dynamic Instructions",
    "question": "Which analogy best fits Dynamic Instructions?",
    "options": ["Teacher always repeating the same lecture", "Teacher adapting tone based on time and student", "Student reading same textbook", "Principal giving fixed rules"],
    "answerIndex": 1,
    "explanation": "Dynamic Instructions are like a teacher adapting style depending on context."
  },
  {
    "id": 179,
    "category": "Dynamic Instructions",
    "question": "Which of the following is a best practice for Dynamic Instructions?",
    "options": ["Always make rules complex", "Test and document logic", "Never use defaults", "Avoid fallback instructions"],
    "answerIndex": 1,
    "explanation": "Best practices include testing and documenting logic."
  },
  {
    "id": 180,
    "category": "Dynamic Instructions",
    "question": "Why should fallback instructions always be provided?",
    "options": ["They save computation", "They prevent errors if context is missing", "They disable dynamic logic", "They allow faster responses"],
    "answerIndex": 1,
    "explanation": "Fallbacks ensure the agent still has instructions even if context is unavailable."
  },
  {
    "id": 181,
    "category": "Dynamic Instructions",
    "question": "What is the main advantage of Dynamic Instructions over Static Instructions?",
    "options": ["They reduce API costs", "They automatically adapt behavior based on context", "They run faster", "They increase max tokens"],
    "answerIndex": 1,
    "explanation": "Dynamic Instructions allow agents to adapt behavior at runtime instead of staying fixed."
  },
  {
    "id": 182,
    "category": "Dynamic Instructions",
    "question": "Which type of Dynamic Instructions would greet a first-time user more politely?",
    "options": ["Static", "Context-Aware", "Time-Based", "Async"],
    "answerIndex": 1,
    "explanation": "Context-Aware instructions adapt tone based on conversation history, such as first-time interactions."
  },
  {
    "id": 183,
    "category": "Dynamic Instructions",
    "question": "Which type of Dynamic Instructions could adapt based on whether it’s morning or night?",
    "options": ["Context-Aware", "Time-Based", "Stateful", "Async"],
    "answerIndex": 1,
    "explanation": "Time-Based instructions adjust tone depending on the current hour."
  },
  {
    "id": 184,
    "category": "Dynamic Instructions",
    "question": "Which type of Dynamic Instructions keeps a counter of past runs?",
    "options": ["Stateful", "Context-Aware", "Static", "Async"],
    "answerIndex": 0,
    "explanation": "Stateful instructions adapt based on how many times the user has interacted with the agent."
  },
  {
    "id": 185,
    "category": "Dynamic Instructions",
    "question": "Which best practice avoids unpredictability in Dynamic Instructions?",
    "options": ["Never test rules", "Add context step by step", "Disable fallback", "Skip documentation"],
    "answerIndex": 1,
    "explanation": "Adding context step by step prevents unpredictable behaviors."
  },
  {
    "id": 186,
    "category": "Dynamic Instructions",
    "question": "Which library is often used with Dynamic Instructions to load secrets like API keys?",
    "options": ["dotenv", "requests", "asyncio", "flask"],
    "answerIndex": 0,
    "explanation": "python-dotenv is used to load API keys and secrets into environment variables."
  },
  {
    "id": 187,
    "category": "Dynamic Instructions",
    "question": "What is the fallback if context is missing in Dynamic Instructions?",
    "options": ["The agent stops", "Provide a default static instruction", "Force tool calling", "Switch to Run Level config"],
    "answerIndex": 1,
    "explanation": "Providing default static instructions ensures continuity if context is absent."
  },
  {
    "id": 188,
    "category": "Context Management",
    "question": "Which context type would store a logger instance?",
    "options": ["Local Context", "LLM Context", "Static Instructions", "Dynamic Instructions"],
    "answerIndex": 0,
    "explanation": "Local Context stores backend objects like loggers that are not exposed to the LLM."
  },
  {
    "id": 189,
    "category": "Context Management",
    "question": "Which context type includes conversation history visible to the AI?",
    "options": ["Local Context", "Agent/LLM Context", "Backend Context", "Dataclass Context"],
    "answerIndex": 1,
    "explanation": "Agent/LLM Context includes system and user messages visible to the AI."
  },
  {
    "id": 190,
    "category": "Tools",
    "question": "Which tool type allows sending a message like an email or SMS?",
    "options": ["Search", "Calculator", "Email/SMS", "Database"],
    "answerIndex": 2,
    "explanation": "Email/SMS tools allow sending outbound communication."
  },
  {
    "id": 191,
    "category": "Tools",
    "question": "Which best describes when an AI should NOT use a tool?",
    "options": ["When exact math is required", "When explanation is enough", "When live data is needed", "When sending emails"],
    "answerIndex": 1,
    "explanation": "If a normal explanation is enough, tools should not be used unnecessarily."
  },
  {
    "id": 192,
    "category": "Tools",
    "question": "Which good practice prevents exposing sensitive data in tools?",
    "options": ["Expose API keys in tool arguments", "Handle errors safely", "Skip validation", "Allow multi-job tools"],
    "answerIndex": 1,
    "explanation": "Handling errors safely ensures security and prevents data exposure."
  },
  {
    "id": 193,
    "category": "uv",
    "question": "What command is used to synchronize dependencies with uv.lock?",
    "options": ["uv update", "uv sync", "uv refresh", "uv clean"],
    "answerIndex": 1,
    "explanation": "uv sync ensures dependencies match the uv.lock file."
  },
  {
    "id": 194,
    "category": "uv",
    "question": "Which command is used to build a project in uv?",
    "options": ["uv make", "uv package", "uv build", "uv compile"],
    "answerIndex": 2,
    "explanation": "uv build creates a distributable package of your project."
  },
  {
    "id": 195,
    "category": "uv",
    "question": "Which command publishes a package in uv?",
    "options": ["uv upload", "uv deploy", "uv publish", "uv share"],
    "answerIndex": 2,
    "explanation": "uv publish is used to publish a package."
  },
  {
    "id": 196,
    "category": "APIs",
    "question": "Which HTTP method is typically used to create or send data?",
    "options": ["GET", "POST", "DELETE", "OPTIONS"],
    "answerIndex": 1,
    "explanation": "POST is used to create or send data to an API."
  },
  {
    "id": 197,
    "category": "APIs",
    "question": "Which API example returns a random cat fact?",
    "options": ["https://catfact.ninja/fact", "https://api.open-meteo.com/", "https://platform.openai.com/api-keys", "https://aistudio.google.com"],
    "answerIndex": 0,
    "explanation": "GET https://catfact.ninja/fact returns a random cat fact."
  },
  {
    "id": 198,
    "category": "Agents SDK",
    "question": "Which Python import is used to create an Agent?",
    "options": ["from agents import Agent", "from openai import Agent", "from uv import Agent", "from sdk import Agent"],
    "answerIndex": 0,
    "explanation": "Agents are created using from agents import Agent."
  },
  {
    "id": 199,
    "category": "Agents SDK",
    "question": "Which Python code runs an agent synchronously?",
    "options": ["Runner.run_sync(agent, input)", "Agent.execute(agent, input)", "Runner.run(agent)", "Agent.run(input)"],
    "answerIndex": 0,
    "explanation": "Runner.run_sync(agent, input) is the correct synchronous execution method."
  },
  {
    "id": 200,
    "category": "Agents SDK",
    "question": "Why is the Agents SDK considered scalable?",
    "options": ["Because it supports multiple agents, tools, and guardrails", "Because it reduces API key cost", "Because it auto-installs libraries", "Because it uses Postman"],
    "answerIndex": 0,
    "explanation": "Scalability comes from its ability to handle multiple agents, tools, and guardrails in real workflows."
  }


];

export default mcqs;