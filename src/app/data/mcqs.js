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
}
];

export default mcqs;